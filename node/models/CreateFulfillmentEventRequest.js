import { d149 as c0 } from '../descriptors/data/6.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d149 as d149 } from '../descriptors/data/6.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d149;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateFulfillmentEventRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentEventRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
