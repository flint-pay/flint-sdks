import { d8532 as c0 } from '../descriptors/data/402.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d1349 as c1 } from '../descriptors/data/64.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d1349 as d1349 } from '../descriptors/data/64.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1349;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RefundDestinations"]:c0(),["RetryOrderEditRefundRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRetryOrderEditRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
