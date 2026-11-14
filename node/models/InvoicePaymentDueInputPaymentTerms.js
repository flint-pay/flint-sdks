import { d883 as c0 } from '../descriptors/data/44.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6222 as c1 } from '../descriptors/data/282.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d883 as d883 } from '../descriptors/data/44.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d883;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueInputPaymentTerms"]:c0(),["SharedCodec938"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueInputPaymentTerms(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
