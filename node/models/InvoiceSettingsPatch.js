import { d3148 as c0 } from '../descriptors/data/124.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5045 as c1, d5046 as c4, d5047 as c5, d5049 as c6 } from '../descriptors/data/230.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3378 as c2, d3379 as c3 } from '../descriptors/data/136.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c7 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5077 as c8, d5078 as c9, d5079 as c10 } from '../descriptors/data/231.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3432 as c11 } from '../descriptors/data/139.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5049 as d5049 } from '../descriptors/data/230.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5049;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["InvoiceAutopayRetryPolicy"]:c1(),["InvoicePaymentOptionLimit"]:c2(),["InvoicePaymentPolicy"]:c3(),["InvoiceReminderPolicy"]:c4(),["InvoiceReminderRule"]:c5(),["InvoiceSettingsPatch"]:c6(),["MoneyValue"]:c7(),["SharedCodec948"]:c8(),["SharedCodec949"]:c9(),["SharedCodec950"]:c10(),["SharedCodec951"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceSettingsPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
