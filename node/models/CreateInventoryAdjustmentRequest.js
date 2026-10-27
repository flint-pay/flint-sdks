import { d169 as c0 } from '../descriptors/data/8.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3968 as c1 } from '../descriptors/data/167.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3970 as c2, d3972 as c3, d3975 as c9, d3976 as c10, d3977 as c11, d3978 as c12, d3980 as c13, d3981 as c14, d3982 as c15, d3984 as c19, d3985 as c20, d3986 as c21, d3987 as c22, d3988 as c23 } from '../descriptors/data/168.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3997 as c4, d3998 as c5, d3999 as c6, d4000 as c7, d3996 as c8, d3993 as c16, d3994 as c17, d3995 as c18 } from '../descriptors/data/169.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d169 as d169 } from '../descriptors/data/8.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d169;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventoryAdjustmentQuantityLineRequest"]:c2(),["InventoryAdjustmentSetLineRequest"]:c3(),["InventorySourceSystemRequest"]:c4(),["SharedCodec142"]:c5(),["SharedCodec143"]:c6(),["SharedCodec144"]:c7(),["SharedCodec145"]:c8(),["SharedCodec146"]:c9(),["SharedCodec147"]:c10(),["SharedCodec148"]:c11(),["SharedCodec149"]:c12(),["SharedCodec150"]:c13(),["SharedCodec151"]:c14(),["SharedCodec152"]:c15(),["SharedCodec832"]:c16(),["SharedCodec833"]:c17(),["SharedCodec834"]:c18(),["SharedCodec835"]:c19(),["SharedCodec836"]:c20(),["SharedCodec837"]:c21(),["SharedCodec838"]:c22(),["SharedCodec839"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
