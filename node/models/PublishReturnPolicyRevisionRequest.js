import { d3013 as c0 } from '../descriptors/data/116.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d882 as c1 } from '../descriptors/data/38.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4872 as c2, d4873 as c3, d4874 as c4, d4875 as c5, d4876 as c6, d4878 as c7, d4879 as c8, d4880 as c9, d4881 as c10 } from '../descriptors/data/220.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4882 as c11, d4883 as c12, d4884 as c13, d4885 as c14, d4886 as c15, d4887 as c16, d4888 as c17, d4889 as c18, d4890 as c19, d4891 as c20, d4892 as c21 } from '../descriptors/data/221.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d882 as d882 } from '../descriptors/data/38.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d882;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScope"]:c3(),["ReturnRestockingFeePolicy"]:c4(),["ReturnShippingPolicy"]:c5(),["ReturnWindow"]:c6(),["SharedCodec1083"]:c7(),["SharedCodec1084"]:c8(),["SharedCodec1085"]:c9(),["SharedCodec1086"]:c10(),["SharedCodec1087"]:c11(),["SharedCodec1088"]:c12(),["SharedCodec1089"]:c13(),["SharedCodec1090"]:c14(),["SharedCodec1091"]:c15(),["SharedCodec1092"]:c16(),["SharedCodec1093"]:c17(),["SharedCodec1094"]:c18(),["SharedCodec1095"]:c19(),["SharedCodec1096"]:c20(),["SharedCodec1097"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
