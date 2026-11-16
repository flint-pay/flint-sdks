import { d896 as c0 } from '../descriptors/data/44.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7024 as c1, d7025 as c2 } from '../descriptors/data/316.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d896 as d896 } from '../descriptors/data/44.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d896;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationOnReceiptRequest"]:c0(),["SharedCodec1269"]:c1(),["SharedCodec1270"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationOnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
