import { d3000 as c0 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d880 as c1 } from '../descriptors/data/38.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4852 as c2 } from '../descriptors/data/218.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4853 as c3, d4854 as c4, d4855 as c5, d4856 as c6, d4858 as c7, d4859 as c8, d4860 as c9, d4861 as c10, d4862 as c11, d4863 as c12, d4864 as c13, d4865 as c14, d4866 as c15, d4867 as c16, d4868 as c17, d4869 as c18, d4870 as c19 } from '../descriptors/data/219.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d880 as d880 } from '../descriptors/data/38.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d880;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScope"]:c3(),["ReturnRestockingFeePolicy"]:c4(),["ReturnShippingPolicy"]:c5(),["ReturnWindow"]:c6(),["SharedCodec1078"]:c7(),["SharedCodec1079"]:c8(),["SharedCodec1080"]:c9(),["SharedCodec1081"]:c10(),["SharedCodec1082"]:c11(),["SharedCodec1083"]:c12(),["SharedCodec1084"]:c13(),["SharedCodec1085"]:c14(),["SharedCodec1086"]:c15(),["SharedCodec1087"]:c16(),["SharedCodec1088"]:c17(),["SharedCodec1089"]:c18(),["SharedCodec1090"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
