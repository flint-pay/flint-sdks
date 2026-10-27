import { d221 as c0 } from '../descriptors/data/12.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c1 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4902 as c2, d4903 as c3, d4904 as c10 } from '../descriptors/data/222.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4396 as c4, d4397 as c13 } from '../descriptors/data/192.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4894 as c5, d4895 as c6, d4896 as c7, d4897 as c8, d4898 as c9 } from '../descriptors/data/221.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4978 as c11 } from '../descriptors/data/227.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3236 as c12 } from '../descriptors/data/129.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d221 as d221 } from '../descriptors/data/12.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d221;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionRequestStandard"]:c0(),["MoneyValue"]:c1(),["ReturnReplacementLineItemRequest"]:c2(),["ReturnResolutionAdjustmentRequest"]:c3(),["ReturnResolutionLineItemRequest"]:c4(),["SharedCodec1096"]:c5(),["SharedCodec1097"]:c6(),["SharedCodec1098"]:c7(),["SharedCodec1099"]:c8(),["SharedCodec1100"]:c9(),["SharedCodec201"]:c10(),["SharedCodec205"]:c11(),["SharedCodec34"]:c12(),["SharedCodec9"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionRequestStandard(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
