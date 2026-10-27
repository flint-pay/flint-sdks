import { d3000 as c0 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d918 as c1 } from '../descriptors/data/40.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4853 as c2, d4854 as c3, d4855 as c4, d4856 as c5, d4860 as c6, d4861 as c7, d4862 as c8, d4863 as c9, d4864 as c10, d4865 as c11, d4866 as c12, d4869 as c13, d4870 as c14 } from '../descriptors/data/219.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d918 as d918 } from '../descriptors/data/40.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d918;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputReturnable"]:c1(),["ReturnPolicyScope"]:c2(),["ReturnRestockingFeePolicy"]:c3(),["ReturnShippingPolicy"]:c4(),["ReturnWindow"]:c5(),["SharedCodec1080"]:c6(),["SharedCodec1081"]:c7(),["SharedCodec1082"]:c8(),["SharedCodec1083"]:c9(),["SharedCodec1084"]:c10(),["SharedCodec1085"]:c11(),["SharedCodec1086"]:c12(),["SharedCodec1089"]:c13(),["SharedCodec1090"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputReturnable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
