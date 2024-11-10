import "../../src/core/core.js";
import "../../src/core/core.env.js";
import "../../src/core/core.ajax.js";
import "../../src/core/core.csp.js";
import "../../src/core/core.expressions.js";
import "../../src/core/core.utils.js";
import "../../src/core/core.resources.js";
import "../../src/core/core.clientwindow.js";
import "../../src/validation/validation.common.js";
import "../../src/validation/validation.converters.js";
import "../../src/validation/validation.validators.js";
import "../../src/validation/validation.highlighters.js";

import { printComponents } from "../../src/printer/print.js";
Object.assign(PrimeFaces, { printComponents });

import { bindHotKey, unbindHotKey } from "../../src/hotkey/hotkey-wrapper.js";
Object.assign(PrimeFaces, { bindHotKey, unbindHotKey });

import { download } from "../../src/filedownload/1-pf-filedownload.js";
Object.assign(PrimeFaces, { download });
