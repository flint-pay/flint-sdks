import { d734 as c0 } from '../descriptors/data/39.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d734 as d734 } from '../descriptors/data/39.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d734;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["HoldFulfillmentRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeHoldFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
