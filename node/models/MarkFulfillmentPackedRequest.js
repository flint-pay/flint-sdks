import { d950 as c0 } from '../descriptors/data/46.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d950 as d950 } from '../descriptors/data/46.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d950;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MarkFulfillmentPackedRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMarkFulfillmentPackedRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
