import { d6479 as c0, d6481 as c4, d6483 as c5, d6484 as c6, d6485 as c8, d6486 as c9, d6487 as c10, d6488 as c11, d6490 as c12, d6491 as c13, d6492 as c14, d6493 as c15, d6494 as c16 } from '../descriptors/data/304.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d276 as c1 } from '../descriptors/data/15.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4429 as c2 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c3 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5892 as c7, d5893 as c17, d5894 as c18, d5895 as c19, d5896 as c20, d5897 as c21 } from '../descriptors/data/270.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6497 as c22, d6498 as c23, d6499 as c24, d6502 as c25, d6503 as c26, d6504 as c27, d6505 as c28 } from '../descriptors/data/305.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d276 as d276 } from '../descriptors/data/15.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d276;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionCodeRequest"]:c0(),["CreatePromotionRequest"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["PromotionApplicationMethodRequest"]:c4(),["PromotionCombinesWithRequest"]:c5(),["PromotionExclusivityRequest"]:c6(),["PromotionRecurrence"]:c7(),["PromotionRuleGroupRequest"]:c8(),["PromotionRuleRequest"]:c9(),["PromotionRuleValueRequest"]:c10(),["PromotionScheduleRequest"]:c11(),["SharedCodec1085"]:c12(),["SharedCodec1086"]:c13(),["SharedCodec1087"]:c14(),["SharedCodec1088"]:c15(),["SharedCodec1089"]:c16(),["SharedCodec1092"]:c17(),["SharedCodec1093"]:c18(),["SharedCodec1094"]:c19(),["SharedCodec1095"]:c20(),["SharedCodec1096"]:c21(),["SharedCodec1097"]:c22(),["SharedCodec1098"]:c23(),["SharedCodec1099"]:c24(),["SharedCodec1122"]:c25(),["SharedCodec1123"]:c26(),["SharedCodec1124"]:c27(),["SharedCodec1125"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
