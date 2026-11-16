import { d606 as c0 } from '../descriptors/data/34.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d606 as d606 } from '../descriptors/data/34.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d606;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DispatchFulfillmentRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDispatchFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
