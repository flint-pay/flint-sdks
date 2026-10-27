import { d3013 as c0 } from '../descriptors/data/116.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4872 as c1, d4873 as c2, d4874 as c3, d4875 as c4, d4876 as c5, d4878 as c6, d4879 as c7, d4880 as c8, d4881 as c9 } from '../descriptors/data/220.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4882 as c10, d4883 as c11, d4884 as c12, d4885 as c13, d4886 as c14, d4887 as c15, d4888 as c16, d4889 as c17, d4890 as c18, d4891 as c19, d4892 as c20 } from '../descriptors/data/221.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4872 as d4872 } from '../descriptors/data/220.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4872;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScope"]:c2(),["ReturnRestockingFeePolicy"]:c3(),["ReturnShippingPolicy"]:c4(),["ReturnWindow"]:c5(),["SharedCodec1083"]:c6(),["SharedCodec1084"]:c7(),["SharedCodec1085"]:c8(),["SharedCodec1086"]:c9(),["SharedCodec1087"]:c10(),["SharedCodec1088"]:c11(),["SharedCodec1089"]:c12(),["SharedCodec1090"]:c13(),["SharedCodec1091"]:c14(),["SharedCodec1092"]:c15(),["SharedCodec1093"]:c16(),["SharedCodec1094"]:c17(),["SharedCodec1095"]:c18(),["SharedCodec1096"]:c19(),["SharedCodec1097"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
