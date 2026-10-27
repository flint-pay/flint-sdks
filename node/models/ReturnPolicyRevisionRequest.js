import { d3000 as c0 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4852 as c1 } from '../descriptors/data/218.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4853 as c2, d4854 as c3, d4855 as c4, d4856 as c5, d4858 as c6, d4859 as c7, d4860 as c8, d4861 as c9, d4862 as c10, d4863 as c11, d4864 as c12, d4865 as c13, d4866 as c14, d4867 as c15, d4868 as c16, d4869 as c17, d4870 as c18 } from '../descriptors/data/219.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4852 as d4852 } from '../descriptors/data/218.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4852;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScope"]:c2(),["ReturnRestockingFeePolicy"]:c3(),["ReturnShippingPolicy"]:c4(),["ReturnWindow"]:c5(),["SharedCodec1078"]:c6(),["SharedCodec1079"]:c7(),["SharedCodec1080"]:c8(),["SharedCodec1081"]:c9(),["SharedCodec1082"]:c10(),["SharedCodec1083"]:c11(),["SharedCodec1084"]:c12(),["SharedCodec1085"]:c13(),["SharedCodec1086"]:c14(),["SharedCodec1087"]:c15(),["SharedCodec1088"]:c16(),["SharedCodec1089"]:c17(),["SharedCodec1090"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
