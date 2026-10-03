import { d454 as c0, d461 as c1, d74 as c2, d2021 as c3, d2028 as c4, d2029 as c5, d2019 as c6, d455 as c7, d2039 as c8, d2040 as c9, d2041 as c10, d460 as c11, d458 as c12, d457 as c13, d456 as c14, d459 as c15, d2020 as c16, d2037 as c17, d2036 as c18, d2035 as c19, d2038 as c20 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d461 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d461;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionCodeRequest"]:c0(),["CreatePromotionRequest"]:c1(),["MoneyValue"]:c2(),["PromotionApplicationMethod"]:c3(),["PromotionCombinesWith"]:c4(),["PromotionExclusivity"]:c5(),["PromotionRecurrence"]:c6(),["PromotionRule"]:c7(),["PromotionRuleGroup"]:c8(),["PromotionRuleValue"]:c9(),["PromotionSchedule"]:c10(),["SharedCodec170"]:c11(),["SharedCodec171"]:c12(),["SharedCodec172"]:c13(),["SharedCodec173"]:c14(),["SharedCodec174"]:c15(),["SharedCodec519"]:c16(),["SharedCodec522"]:c17(),["SharedCodec523"]:c18(),["SharedCodec524"]:c19(),["SharedCodec525"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
