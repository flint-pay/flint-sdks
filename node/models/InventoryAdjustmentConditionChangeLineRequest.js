import { d3968 as c0 } from '../descriptors/data/167.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3984 as c1, d3985 as c2, d3986 as c3, d3987 as c4, d3988 as c5 } from '../descriptors/data/168.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3968 as d3968 } from '../descriptors/data/167.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3968;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAdjustmentConditionChangeLineRequest"]:c0(),["SharedCodec835"]:c1(),["SharedCodec836"]:c2(),["SharedCodec837"]:c3(),["SharedCodec838"]:c4(),["SharedCodec839"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustmentConditionChangeLineRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
