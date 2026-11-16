import { d8096 as c0 } from '../descriptors/data/375.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7993 as c1 } from '../descriptors/data/370.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c2 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7993 as d7993 } from '../descriptors/data/370.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7993;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentOptionLimitRequest"]:c0(),["InvoicePaymentPolicyRequest"]:c1(),["MoneyValue"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
