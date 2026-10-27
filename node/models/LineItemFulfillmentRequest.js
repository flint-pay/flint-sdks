import { d3616 as c0, d3617 as c1 } from '../descriptors/data/149.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3617 as d3617 } from '../descriptors/data/149.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3617;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequest"]:c0(),["LineItemFulfillmentRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLineItemFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
