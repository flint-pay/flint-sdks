import { d4312 as c0 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6480 as c1, d6482 as c2, d6485 as c3, d6486 as c4, d6487 as c5, d6489 as c6, d6490 as c7, d6491 as c8, d6492 as c9, d6493 as c10, d6494 as c11, d6495 as c12, d6496 as c13 } from '../descriptors/data/304.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5893 as c14, d5894 as c15, d5895 as c16, d5896 as c17, d5897 as c18 } from '../descriptors/data/270.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6502 as c19, d6503 as c20, d6504 as c21, d6505 as c22, d6506 as c25, d6507 as c26, d6508 as c27, d6509 as c28, d6510 as c29, d6511 as c30 } from '../descriptors/data/305.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4430 as c23 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4542 as c24 } from '../descriptors/data/194.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4224 as c31 } from '../descriptors/data/176.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4224 as d4224 } from '../descriptors/data/176.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4224;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionCombinesWithPatch"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1084"]:c6(),["SharedCodec1085"]:c7(),["SharedCodec1086"]:c8(),["SharedCodec1087"]:c9(),["SharedCodec1088"]:c10(),["SharedCodec1089"]:c11(),["SharedCodec1090"]:c12(),["SharedCodec1091"]:c13(),["SharedCodec1092"]:c14(),["SharedCodec1093"]:c15(),["SharedCodec1094"]:c16(),["SharedCodec1095"]:c17(),["SharedCodec1096"]:c18(),["SharedCodec1122"]:c19(),["SharedCodec1123"]:c20(),["SharedCodec1124"]:c21(),["SharedCodec1125"]:c22(),["SharedCodec1368"]:c23(),["SharedCodec1371"]:c24(),["SharedCodec1436"]:c25(),["SharedCodec1437"]:c26(),["SharedCodec1438"]:c27(),["SharedCodec1439"]:c28(),["SharedCodec1440"]:c29(),["SharedCodec1441"]:c30(),["UpdatePromotionRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
