import { d946 as c0 } from '../descriptors/data/47.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d946 as d946 } from '../descriptors/data/47.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d946;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MarkFulfillmentNoShowRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMarkFulfillmentNoShowRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
