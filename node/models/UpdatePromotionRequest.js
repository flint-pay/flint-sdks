import { d74 as c0, d2021 as c1, d2028 as c2, d2029 as c3, d2019 as c4, d455 as c5, d2039 as c6, d2040 as c7, d2041 as c8, d460 as c9, d458 as c10, d457 as c11, d456 as c12, d459 as c13, d2020 as c14, d2037 as c15, d2036 as c16, d2035 as c17, d2038 as c18, d2450 as c19 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d2450 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2450;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethod"]:c1(),["PromotionCombinesWith"]:c2(),["PromotionExclusivity"]:c3(),["PromotionRecurrence"]:c4(),["PromotionRule"]:c5(),["PromotionRuleGroup"]:c6(),["PromotionRuleValue"]:c7(),["PromotionSchedule"]:c8(),["SharedCodec170"]:c9(),["SharedCodec171"]:c10(),["SharedCodec172"]:c11(),["SharedCodec173"]:c12(),["SharedCodec174"]:c13(),["SharedCodec519"]:c14(),["SharedCodec522"]:c15(),["SharedCodec523"]:c16(),["SharedCodec524"]:c17(),["SharedCodec525"]:c18(),["UpdatePromotionRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
