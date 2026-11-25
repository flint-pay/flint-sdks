import { d1911 as c0 } from '../descriptors/data/96.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d1911 as d1911 } from '../descriptors/data/96.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1911;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ScheduleFulfillmentRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeScheduleFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
