import { d4312 as c0 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6480 as c1, d6485 as c2, d6486 as c3, d6487 as c4, d6489 as c5, d6490 as c6, d6491 as c7, d6492 as c8, d6493 as c9, d6494 as c10, d6495 as c11, d6496 as c12 } from '../descriptors/data/304.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5893 as c13, d5894 as c14, d5895 as c15, d5896 as c16, d5897 as c17 } from '../descriptors/data/270.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6502 as c18, d6503 as c19, d6504 as c20, d6505 as c21 } from '../descriptors/data/305.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6480 as d6480 } from '../descriptors/data/304.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6480;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionRuleGroupRequest"]:c2(),["PromotionRuleRequest"]:c3(),["PromotionRuleValueRequest"]:c4(),["SharedCodec1084"]:c5(),["SharedCodec1085"]:c6(),["SharedCodec1086"]:c7(),["SharedCodec1087"]:c8(),["SharedCodec1088"]:c9(),["SharedCodec1089"]:c10(),["SharedCodec1090"]:c11(),["SharedCodec1091"]:c12(),["SharedCodec1092"]:c13(),["SharedCodec1093"]:c14(),["SharedCodec1094"]:c15(),["SharedCodec1095"]:c16(),["SharedCodec1096"]:c17(),["SharedCodec1122"]:c18(),["SharedCodec1123"]:c19(),["SharedCodec1124"]:c20(),["SharedCodec1125"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
