import { d4312 as c0 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6485 as c1, d6486 as c2, d6487 as c3, d6490 as c4, d6491 as c5, d6492 as c6, d6493 as c7, d6494 as c8 } from '../descriptors/data/304.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6502 as c9, d6503 as c10, d6504 as c11, d6505 as c12 } from '../descriptors/data/305.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6485 as d6485 } from '../descriptors/data/304.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6485;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRuleGroupRequest"]:c1(),["PromotionRuleRequest"]:c2(),["PromotionRuleValueRequest"]:c3(),["SharedCodec1085"]:c4(),["SharedCodec1086"]:c5(),["SharedCodec1087"]:c6(),["SharedCodec1088"]:c7(),["SharedCodec1089"]:c8(),["SharedCodec1122"]:c9(),["SharedCodec1123"]:c10(),["SharedCodec1124"]:c11(),["SharedCodec1125"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
