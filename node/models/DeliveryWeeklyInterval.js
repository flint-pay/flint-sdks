import { d3550 as c0 } from '../descriptors/data/145.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3550 as d3550 } from '../descriptors/data/145.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3550;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryWeeklyInterval"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryWeeklyInterval(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
