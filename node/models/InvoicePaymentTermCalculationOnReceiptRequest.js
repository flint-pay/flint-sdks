import { d895 as c0 } from '../descriptors/data/45.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6194 as c1, d6195 as c2 } from '../descriptors/data/281.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d895 as d895 } from '../descriptors/data/45.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d895;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationOnReceiptRequest"]:c0(),["SharedCodec947"]:c1(),["SharedCodec948"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationOnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
