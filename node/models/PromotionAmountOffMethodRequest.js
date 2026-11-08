import { d4312 as c0 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1139 as c1 } from '../descriptors/data/54.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5892 as c2, d5893 as c11, d5894 as c12, d5895 as c13, d5896 as c14, d5897 as c15 } from '../descriptors/data/270.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6485 as c3, d6486 as c4, d6487 as c5, d6490 as c6, d6491 as c7, d6492 as c8, d6493 as c9, d6494 as c10 } from '../descriptors/data/304.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6502 as c16, d6503 as c17, d6504 as c18, d6505 as c19 } from '../descriptors/data/305.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1139 as d1139 } from '../descriptors/data/54.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1139;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionAmountOffMethodRequest"]:c1(),["PromotionRecurrence"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1085"]:c6(),["SharedCodec1086"]:c7(),["SharedCodec1087"]:c8(),["SharedCodec1088"]:c9(),["SharedCodec1089"]:c10(),["SharedCodec1092"]:c11(),["SharedCodec1093"]:c12(),["SharedCodec1094"]:c13(),["SharedCodec1095"]:c14(),["SharedCodec1096"]:c15(),["SharedCodec1122"]:c16(),["SharedCodec1123"]:c17(),["SharedCodec1124"]:c18(),["SharedCodec1125"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionAmountOffMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
