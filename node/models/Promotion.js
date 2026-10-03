import { d74 as c0, d2015 as c1, d2018 as c2, d2014 as c3, d2025 as c4, d2026 as c5, d2016 as c6, d453 as c7, d2036 as c8, d2037 as c9, d2038 as c10, d458 as c11, d456 as c12, d455 as c13, d454 as c14, d457 as c15, d2017 as c16, d2034 as c17, d2033 as c18, d2032 as c19, d2035 as c20 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2015 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2015;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["Promotion"]:c1(),["PromotionApplicationMethod"]:c2(),["PromotionCodesSummary"]:c3(),["PromotionCombinesWith"]:c4(),["PromotionExclusivity"]:c5(),["PromotionRecurrence"]:c6(),["PromotionRule"]:c7(),["PromotionRuleGroup"]:c8(),["PromotionRuleValue"]:c9(),["PromotionSchedule"]:c10(),["SharedCodec170"]:c11(),["SharedCodec171"]:c12(),["SharedCodec172"]:c13(),["SharedCodec173"]:c14(),["SharedCodec174"]:c15(),["SharedCodec519"]:c16(),["SharedCodec522"]:c17(),["SharedCodec523"]:c18(),["SharedCodec524"]:c19(),["SharedCodec525"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotion(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
