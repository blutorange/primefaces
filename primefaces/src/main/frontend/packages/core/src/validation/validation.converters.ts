import { core } from "../core/core.js";

class IntegerConverter implements PrimeType.validation.Converter<number> {
    private readonly regex = /^[-+]?\d+$/;

    private readonly MESSAGE_ID = 'javax.faces.converter.IntegerConverter.INTEGER';

    convert(element: JQuery, submittedValue: string | null): number | null {
        if (submittedValue === null) {
            return null;
        }

        if (core.trim(submittedValue).length === 0) {
            return null;
        }

        const vc = core.validation.ValidationContext;

        if (!this.regex.test(submittedValue)) {
            throw vc.getMessage(this.MESSAGE_ID, submittedValue, 9346, vc.getLabel(element));
        }

        return parseInt(submittedValue);
    }
}

class LongConverter implements PrimeType.validation.Converter<number> {
    private readonly regex = /^[-+]?\d+$/;
    
    private readonly MESSAGE_ID = 'javax.faces.converter.LongConverter.LONG';
    
    convert(element: JQuery, submittedValue: string | null): number | null {
        if (submittedValue === null) {
            return null;
        }
    
        if (core.trim(submittedValue).length === 0) {
            return null;
        }
    
        const vc = core.validation.ValidationContext;
    
        if (!this.regex.test(submittedValue)) {
            throw vc.getMessage(this.MESSAGE_ID, submittedValue, 98765432, vc.getLabel(element));
        }
    
        return parseInt(submittedValue);
    }
}

class DoubleConverter implements PrimeType.validation.Converter<number> {
    private readonly regex = /^[-+]?\d*(\.\d+)?[d]?$/;

    private readonly MESSAGE_ID = 'javax.faces.converter.DoubleConverter.DOUBLE';

    convert(element: JQuery, submittedValue: string | null): number | null {
        if (submittedValue === null) {
            return null;
        }

        if (core.trim(submittedValue).length === 0) {
            return null;
        }

        const vc = core.validation.ValidationContext;

        if (!this.regex.test(submittedValue)) {
            throw vc.getMessage(this.MESSAGE_ID, submittedValue, 1999999, vc.getLabel(element));
        }

        return parseFloat(submittedValue);
    }
}

class FloatConverter implements PrimeType.validation.Converter<number> {
    private readonly regex = /^[-+]?\d+(\.\d+)?[f]?$/;

    private readonly MESSAGE_ID = 'javax.faces.converter.FloatConverter.FLOAT';

    convert(element: JQuery, submittedValue: string | null): number | null {
        if (submittedValue === null) {
            return null;
        }
    
        if (core.trim(submittedValue).length === 0) {
            return null;
        }
    
        const vc = core.validation.ValidationContext;
    
        if (!this.regex.test(submittedValue)) {
            throw vc.getMessage(this.MESSAGE_ID, submittedValue, 2000000000, vc.getLabel(element));
        }
    
        return parseFloat(submittedValue);
    }
}

class ShortConverter implements PrimeType.validation.Converter<number> {
    private readonly regex = /^[-+]?\d+$/;
    
    private readonly MESSAGE_ID = 'javax.faces.converter.ShortConverter.SHORT';
    
    convert(element: JQuery, submittedValue: string | null): number | null {
        if (submittedValue === null) {
            return null;
        }
    
        if (core.trim(submittedValue).length === 0) {
            return null;
        }
    
        const vc = core.validation.ValidationContext;
    
        if (!this.regex.test(submittedValue)) {
            throw vc.getMessage(this.MESSAGE_ID, submittedValue, 32456, vc.getLabel(element));
        }
    
        return parseInt(submittedValue);
    }
}

class BigIntegerConverter implements PrimeType.validation.Converter<number> {
    private readonly regex = /^[-+]?\d+$/;

    private readonly MESSAGE_ID = 'javax.faces.converter.BigIntegerConverter.BIGINTEGER';

    convert(element: JQuery, submittedValue: string | null): number | null {
        if (submittedValue === null) {
            return null;
        }

        if (core.trim(submittedValue).length === 0) {
            return null;
        }

        const vc = core.validation.ValidationContext;

        if (!this.regex.test(submittedValue)) {
            throw vc.getMessage(this.MESSAGE_ID, submittedValue, 9876, vc.getLabel(element));
        }

        return parseInt(submittedValue);
    }
}

class BigDecimalConverter implements PrimeType.validation.Converter<number> {
    private readonly regex = /^[-+]?\d+(\.\d+)?[d]?$/;

    private readonly MESSAGE_ID = 'javax.faces.converter.BigDecimalConverter.DECIMAL';

    convert(element: JQuery, submittedValue: string | null): number | null {
        if (submittedValue === null) {
            return null;
        }

        if (core.trim(submittedValue).length === 0) {
            return null;
        }

        const vc = core.validation.ValidationContext;

        if (!this.regex.test(submittedValue)) {
            throw vc.getMessage(this.MESSAGE_ID, submittedValue, 198.23, vc.getLabel(element));
        }

        return parseFloat(submittedValue);
    }
}

class ByteConverter implements PrimeType.validation.Converter<number> {
    private readonly regex = /^-?\d+$/;

    private readonly MESSAGE_ID = 'javax.faces.converter.ByteConverter.BYTE';

    convert(element: JQuery, submittedValue: string | null): number | null {
        if (submittedValue === null) {
            return null;
        }

        if (core.trim(submittedValue).length === 0) {
            return null;
        }

        const vc = core.validation.ValidationContext;

        if (!this.regex.test(submittedValue)) {
            throw vc.getMessage(this.MESSAGE_ID, submittedValue, -12, vc.getLabel(element));
        }
        else {
            const byteValue = parseInt(submittedValue);

            if(byteValue < -128 || byteValue > 127) {
                throw vc.getMessage(this.MESSAGE_ID, submittedValue, -12, vc.getLabel(element));
            }
            else {
                return byteValue;
            }
        }
    }
}

class CharacterConverter implements PrimeType.validation.Converter<string> {
    private readonly MESSAGE_ID = 'javax.faces.converter.CharacterConverter.CHARACTER';

    convert(element: JQuery, submittedValue: string | null): string | null {
        if (submittedValue === null) {
            return null;
        }

        if (core.trim(submittedValue).length === 0) {
            return null;
        }

        const vc = core.validation.ValidationContext;

        try {
            return submittedValue.charAt(0);
        }
        catch(exception) {
            throw vc.getMessage(this.MESSAGE_ID, submittedValue, vc.getLabel(element));
        }
    }
}

class BooleanConverter implements PrimeType.validation.Converter<boolean> {
    private readonly MESSAGE_ID = 'javax.faces.converter.BooleanConverter.BOOLEAN';

    convert(element: JQuery, submittedValue: string | null): boolean | null {
        if (submittedValue === null) {
            return null;
        }

        if (core.trim(submittedValue).length === 0) {
            return null;
        }

        const vc = core.validation.ValidationContext;

        try {
            return (submittedValue === 'true' || submittedValue === 'on' || submittedValue === 'yes') ? true : false;
        }
        catch (exception) {
            throw vc.getMessage(this.MESSAGE_ID, submittedValue, vc.getLabel(element));
        }
    }
}

class DateTimeConverter implements PrimeType.validation.Converter<Date> {
    private readonly DATE_ID = 'javax.faces.converter.DateTimeConverter.DATE';
    private readonly TIME_ID = 'javax.faces.converter.DateTimeConverter.TIME';
    private readonly DATETIME_ID = 'javax.faces.converter.DateTimeConverter.DATETIME';

    convert(element: JQuery, submittedValue: string | null): Date | null {
        if (submittedValue === null) {
            return null;
        }

        if (core.trim(submittedValue).length === 0) {
            return null;
        }

        const vc = core.validation.ValidationContext;
        const javaPattern = element.data('p-pattern');
        const type = element.data('p-dttype');
        let datePattern: string | null = null;
        let timePattern: string | null = null;
        
        if (typeof moment === 'undefined') {
            core.error("Moment.js is not loaded! Please enable 'primefaces.CLIENT_SIDE_VALIDATION' in web.xml!");
        }

        try {
            if (javaPattern) {
                const patternTokens = javaPattern.split(" ");
                for (let i = 0; i < patternTokens.length; i++) {
                    if (patternTokens[i].toLowerCase().indexOf('h') !== -1) {
                        timePattern = patternTokens[i];
                    }
                    else if (patternTokens[i].toLowerCase().indexOf('t') !== -1 && timePattern) {
                        timePattern = timePattern + " " + patternTokens[i];
                    }
                    else {
                        datePattern = patternTokens[i];
                    }
                }
            }
            else {
                datePattern = element.data('p-dspattern');
                timePattern = element.data('p-tspattern');
            }

            // convert Java pattern into Moment pattern and return a Date()
            const convertDate = (submittedValue: string | null, format: string): Date => {
                return moment(submittedValue, moment().toMomentFormatString(format)).toDate();
            };

            if (timePattern && datePattern) {
                return convertDate(submittedValue, javaPattern);
            } else if (timePattern) {
                return convertDate(submittedValue, timePattern);
            } else if (datePattern) {
                return convertDate(submittedValue, datePattern);
            } else {
                return null;
            }
        }
        catch (exception) {
            const now = moment().formatWithJDF(javaPattern);

            if (type === 'date') {
                throw vc.getMessage(this.DATE_ID, submittedValue, now, vc.getLabel(element));
            }
            else if (type === 'time') {
                throw vc.getMessage(this.TIME_ID, submittedValue, now, vc.getLabel(element));
            }
            else if (type === 'both') {
                throw vc.getMessage(this.DATETIME_ID, submittedValue, now, vc.getLabel(element));
            } else {
                return null;
            }
        }
    }
}

class NumberConverter implements PrimeType.validation.Converter<number> {
    private readonly CURRENCY_ID = 'javax.faces.converter.NumberConverter.CURRENCY';
    private readonly NUMBER_ID = 'javax.faces.converter.NumberConverter.NUMBER';
    private readonly PERCENT_ID = 'javax.faces.converter.NumberConverter.PERCENT';
    private readonly REGEX = /^[-+]?\d+(\,\d+)?(\.\d+)?[d]?$/;

    convert(element: JQuery, submittedValue: string | null): number | null {
        if (submittedValue === null) {
            return null;
        }

        if (core.trim(submittedValue).length === 0) {
            return null;
        }

        const vc = core.validation.ValidationContext;
        const locale = core.getLocaleSettings();
        const type = element.data('p-notype');
        const maxIntegerDigits = element.data('p-maxint');
        const minFractionDigits = element.data('p-minfrac');
        const integerOnly = element.data('p-intonly');

        if (type === 'currency') {
            const currencySymbol = element.data('p-curs');

            if (currencySymbol) {
                if(submittedValue.indexOf(currencySymbol) === -1) {
                    throw vc.getMessage(this.CURRENCY_ID, submittedValue, currencySymbol + '100', vc.getLabel(element));
                }
                else {
                    submittedValue = submittedValue.substring(currencySymbol.length);
                }
            }
        }
        else if(type === 'percent') {
            if(submittedValue.lastIndexOf('%') !== (submittedValue.length - 1)) {
                throw vc.getMessage(this.PERCENT_ID, submittedValue, '50%', vc.getLabel(element));
            }
            else {
                submittedValue = submittedValue.replace(/%/g, '');
            }
        }

        if (!this.REGEX.test(submittedValue)) {
            throw vc.getMessage(this.NUMBER_ID, submittedValue, 50, vc.getLabel(element));
        }

        const tokens = submittedValue.split(locale.decimalSeparator ?? "");
        let intValue = tokens[0]?.replace(new RegExp(locale.groupingSeparator ?? "", 'g'), '') ?? "";
        let decimalValue = tokens[1];

        if (maxIntegerDigits && intValue.length > maxIntegerDigits) {
            intValue = intValue.substring(intValue.length - maxIntegerDigits);
        }

        if (decimalValue && minFractionDigits && decimalValue.length > minFractionDigits) {
            decimalValue = decimalValue.substring(0, minFractionDigits);
        }

        if(integerOnly) {
            return parseInt(intValue);
        }
        else {
            return parseInt(intValue) + parseFloat('.' + decimalValue);
        }
    }
}

export function registerCommonConverters(): void {
    core.converter["javax.faces.Integer"] = new IntegerConverter();
    core.converter["javax.faces.Long"] = new LongConverter();
    core.converter["javax.faces.Double"] = new DoubleConverter();
    core.converter["javax.faces.Float"] = new FloatConverter();
    core.converter["javax.faces.Short"] = new ShortConverter();
    core.converter["javax.faces.BigInteger"] = new BigIntegerConverter();
    core.converter["javax.faces.BigDecimal"] = new BigDecimalConverter();
    core.converter["javax.faces.Byte"] = new ByteConverter();
    core.converter["javax.faces.Character"] = new CharacterConverter();
    core.converter["javax.faces.Boolean"] = new BooleanConverter();
    core.converter["javax.faces.DateTime"] = new DateTimeConverter();
    core.converter["javax.faces.Number"] = new NumberConverter();
}
