import { d168 as c0 } from '../descriptors/data/8.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3970 as c1 } from '../descriptors/data/168.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3997 as c2, d3998 as c3, d3999 as c4, d4000 as c5, d3996 as c6, d3993 as c7, d3994 as c8, d3995 as c9 } from '../descriptors/data/169.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d168 as d168 } from '../descriptors/data/8.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d168;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentQuantityRequest"]:c0(),["InventoryAdjustmentQuantityLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec142"]:c3(),["SharedCodec143"]:c4(),["SharedCodec144"]:c5(),["SharedCodec145"]:c6(),["SharedCodec832"]:c7(),["SharedCodec833"]:c8(),["SharedCodec834"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentQuantityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
