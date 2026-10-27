import { d3871 as c0 } from '../descriptors/data/163.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3871 as d3871 } from '../descriptors/data/163.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3871;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateServiceFulfillmentDetails"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateServiceFulfillmentDetails(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
