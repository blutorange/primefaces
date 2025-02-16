import { core } from "../core/core.js";
import { utils } from "../core/core.utils.js";

function toNumber(value: unknown): number | undefined {
    if (value === undefined || value === null) {
        return undefined;
    }
    if (typeof value === "number") {
        return value;
    }
    if (typeof value === "string") {
        return value.length > 0 ? parseFloat(value) : undefined;
    }
    if (typeof value === "boolean") {
        return value ? 1 : 0;
    }
    return undefined;
}

class LengthValidator implements PrimeType.validation.Validator {
    private readonly MINIMUM_MESSAGE_ID = 'javax.faces.validator.LengthValidator.MINIMUM';
    private readonly MAXIMUM_MESSAGE_ID = 'javax.faces.validator.LengthValidator.MAXIMUM';

    validate(element: JQuery): void {
        const value = element.val();
        if (value === undefined) {
            return;
        }
        const length = Array.isArray(value) || typeof value === "string" ? value.length : value.toString().length;
        const min = toNumber(element.data('p-minlength'));
        const max = toNumber(element.data('p-maxlength'));
        const vc = core.validation.ValidationContext;

        if (max !== undefined && length > max) {
            throw vc.getMessage(this.MAXIMUM_MESSAGE_ID, max, vc.getLabel(element));
        }

        if (min !== undefined && length < min) {
            throw vc.getMessage(this.MINIMUM_MESSAGE_ID, min, vc.getLabel(element));
        }
    }
}

class LongRangeValidator implements PrimeType.validation.Validator {
    private readonly MINIMUM_MESSAGE_ID = 'javax.faces.validator.LongRangeValidator.MINIMUM';
    private readonly MAXIMUM_MESSAGE_ID = 'javax.faces.validator.LongRangeValidator.MAXIMUM';
    private readonly NOT_IN_RANGE_MESSAGE_ID = 'javax.faces.validator.LongRangeValidator.NOT_IN_RANGE';
    private readonly TYPE_MESSAGE_ID = 'javax.faces.validator.LongRangeValidator.TYPE';
    private readonly regex = /^-?\d+$/;

    validate(element: JQuery, value: unknown): void {
        if (value !== null) {
            const min = toNumber(element.data('p-minvalue'));
            const max = toNumber(element.data('p-maxvalue'));
            const vc = core.validation.ValidationContext;
            const stringValue = String(value);
            const numberValue = parseFloat(stringValue);

            if (!this.regex.test(stringValue)) {
                throw vc.getMessage(this.TYPE_MESSAGE_ID, vc.getLabel(element));
            }

            if ((max !== undefined && min !== undefined) && (numberValue < min || numberValue > max)) {
                throw vc.getMessage(this.NOT_IN_RANGE_MESSAGE_ID, min, max, vc.getLabel(element));
            }
            else if ((max !== undefined && min === undefined) && (numberValue > max)) {
                throw vc.getMessage(this.MAXIMUM_MESSAGE_ID, max, vc.getLabel(element));
            }
            else if ((min !== undefined && max === undefined) && (numberValue < min)) {
                throw vc.getMessage(this.MINIMUM_MESSAGE_ID, min, vc.getLabel(element));
            }
        }
    }
}

class DoubleRangeValidator implements PrimeType.validation.Validator {
    private readonly MINIMUM_MESSAGE_ID = 'javax.faces.validator.DoubleRangeValidator.MINIMUM';
    private readonly MAXIMUM_MESSAGE_ID = 'javax.faces.validator.DoubleRangeValidator.MAXIMUM';
    private readonly NOT_IN_RANGE_MESSAGE_ID = 'javax.faces.validator.DoubleRangeValidator.NOT_IN_RANGE';
    private readonly TYPE_MESSAGE_ID = 'javax.faces.validator.DoubleRangeValidator.TYPE';
    private readonly regex = /^[-+]?\d*(\.\d+)?[d]?$/;

    validate(element: JQuery, value: unknown): void {
        if (value !== null) {
            const min = toNumber(element.data('p-minvalue'));
            const max = toNumber(element.data('p-maxvalue'));
            const vc = core.validation.ValidationContext;
            const stringValue = String(value);
            const numberValue = parseFloat(stringValue);

            if(!this.regex.test(stringValue)) {
                throw vc.getMessage(this.TYPE_MESSAGE_ID, vc.getLabel(element));
            }

            if ((max !== undefined && min !== undefined) && (numberValue < min || numberValue > max)) {
                throw vc.getMessage(this.NOT_IN_RANGE_MESSAGE_ID, min, max, vc.getLabel(element));
            }
            else if ((max !== undefined && min === undefined) && (numberValue > max)) {
                throw vc.getMessage(this.MAXIMUM_MESSAGE_ID, max, vc.getLabel(element));
            }
            else if ((min !== undefined && max === undefined) && (numberValue < min)) {
                throw vc.getMessage(this.MINIMUM_MESSAGE_ID, min, vc.getLabel(element));
            }
        }
    }
}

class RegularExpressionValidator implements PrimeType.validation.Validator {
    private readonly PATTERN_NOT_SET_MESSAGE_ID = 'javax.faces.validator.RegexValidator.PATTERN_NOT_SET';
    private readonly NOT_MATCHED_MESSAGE_ID = 'javax.faces.validator.RegexValidator.NOT_MATCHED';

    validate(element: JQuery, value: unknown): void {
        if (value !== null) {
            const pattern = element.data('p-regex');
            const vc = core.validation.ValidationContext;
            const stringValue = String(value);

            if(!pattern) {
                throw vc.getMessage(this.PATTERN_NOT_SET_MESSAGE_ID);
            }

            var regex = new RegExp(pattern);
            if(!regex.test(stringValue)) {
                throw vc.getMessage(this.NOT_MATCHED_MESSAGE_ID, pattern);
            }
        }
    }
}

class FileValidator implements PrimeType.validation.Validator {
    private readonly FILE_LIMIT_MESSAGE_ID = 'primefaces.FileValidator.FILE_LIMIT';
    private readonly ALLOW_TYPES_MESSAGE_ID = 'primefaces.FileValidator.ALLOW_TYPES';
    private readonly SIZE_LIMIT_MESSAGE_ID = 'primefaces.FileValidator.SIZE_LIMIT';

    validate(element: JQuery, value: unknown): void {
        if (value !== null && value instanceof FileList) {

            const fileLimit = element.data('p-filelimit');
            const allowTypes = element.data('p-allowtypes');
            const sizeLimit = element.data('p-sizelimit');
            const vc = core.validation.ValidationContext;
            const messages: PrimeType.BaseFacesMessage[] = [];

            let allowTypesRegExp = null;
            if (allowTypes) {
                // normally a regex is a object like /(\.|\/)(csv)$/
                // but as we parse the data-attribute from string to RegEx object, we must remove leading and ending slashes
                const regexParts = allowTypes.match(/^\/(.*)\/([a-z]*)$/);
                const transformedAllowTypes = regexParts[1];
                const flags = regexParts[2];
                allowTypesRegExp = new RegExp(transformedAllowTypes, flags);
            }

            if (fileLimit && value.length > fileLimit) {
                messages.push(vc.getMessage(this.FILE_LIMIT_MESSAGE_ID, fileLimit));
            }

            for (const file of value) {
                if (allowTypesRegExp && (!allowTypesRegExp.test(file.type) && !allowTypesRegExp.test(file.name)))  {
                    messages.push(vc.getMessage(this.ALLOW_TYPES_MESSAGE_ID, file.name, utils.formatAllowTypes(allowTypes)));
                }

                if (sizeLimit && file.size > sizeLimit) {
                    messages.push(vc.getMessage(this.SIZE_LIMIT_MESSAGE_ID, file.name, utils.formatBytes(sizeLimit)));
                }
            }

            if (messages.length > 0) {
                throw messages;
            }
        }
    }
}

export function registerCommonValidators(): void {
    core.validator['javax.faces.Length'] = new LengthValidator();
    core.validator['javax.faces.LongRange'] = new LongRangeValidator();
    core.validator['javax.faces.DoubleRange'] = new DoubleRangeValidator();
    core.validator['javax.faces.RegularExpression'] = new RegularExpressionValidator();
    core.validator['primefaces.File'] = new FileValidator();
}

