import { d3000 as c0 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4894 as c1, d4895 as c2, d4896 as c3, d4897 as c4, d4898 as c5 } from '../descriptors/data/221.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3396 as c6 } from '../descriptors/data/137.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4919 as c7, d4920 as c8, d4925 as c10, d4926 as c11, d4927 as c12 } from '../descriptors/data/223.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3236 as c9 } from '../descriptors/data/129.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2474 as c13 } from '../descriptors/data/99.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2474 as d2474 } from '../descriptors/data/99.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2474;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SharedCodec1096"]:c1(),["SharedCodec1097"]:c2(),["SharedCodec1098"]:c3(),["SharedCodec1099"]:c4(),["SharedCodec1100"]:c5(),["SharedCodec1163"]:c6(),["SharedCodec1213"]:c7(),["SharedCodec1214"]:c8(),["SharedCodec34"]:c9(),["UpdateReturnReplacementLineItemRequest"]:c10(),["UpdateReturnResolutionAdjustmentRequest"]:c11(),["UpdateReturnResolutionLineItemRequest"]:c12(),["UpdateReturnResolutionRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
