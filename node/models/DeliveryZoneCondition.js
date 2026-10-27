import { d3553 as c0 } from '../descriptors/data/145.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3553 as d3553 } from '../descriptors/data/145.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3553;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryZoneCondition"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryZoneCondition(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
