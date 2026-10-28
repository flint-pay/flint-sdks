import { d3013 as c0 } from '../descriptors/data/116.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d920 as c1 } from '../descriptors/data/41.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4873 as c2, d4874 as c3, d4875 as c4, d4876 as c5, d4880 as c6, d4881 as c7 } from '../descriptors/data/220.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4882 as c8, d4883 as c9, d4884 as c10, d4885 as c11, d4886 as c12, d4889 as c13, d4890 as c14, d4891 as c15, d4892 as c16 } from '../descriptors/data/221.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d920 as d920 } from '../descriptors/data/41.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d920;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputReturnable"]:c1(),["ReturnPolicyScope"]:c2(),["ReturnRestockingFeePolicy"]:c3(),["ReturnShippingPolicy"]:c4(),["ReturnWindow"]:c5(),["SharedCodec1085"]:c6(),["SharedCodec1086"]:c7(),["SharedCodec1087"]:c8(),["SharedCodec1088"]:c9(),["SharedCodec1089"]:c10(),["SharedCodec1090"]:c11(),["SharedCodec1091"]:c12(),["SharedCodec1094"]:c13(),["SharedCodec1095"]:c14(),["SharedCodec1096"]:c15(),["SharedCodec1097"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputReturnable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
