import { d74 as c0, d2018 as c1, d2025 as c2, d2026 as c3, d2016 as c4, d453 as c5, d2036 as c6, d2037 as c7, d2038 as c8, d458 as c9, d456 as c10, d455 as c11, d454 as c12, d457 as c13, d2017 as c14, d2034 as c15, d2033 as c16, d2032 as c17, d2035 as c18, d2447 as c19 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2447 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2447;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethod"]:c1(),["PromotionCombinesWith"]:c2(),["PromotionExclusivity"]:c3(),["PromotionRecurrence"]:c4(),["PromotionRule"]:c5(),["PromotionRuleGroup"]:c6(),["PromotionRuleValue"]:c7(),["PromotionSchedule"]:c8(),["SharedCodec170"]:c9(),["SharedCodec171"]:c10(),["SharedCodec172"]:c11(),["SharedCodec173"]:c12(),["SharedCodec174"]:c13(),["SharedCodec519"]:c14(),["SharedCodec522"]:c15(),["SharedCodec523"]:c16(),["SharedCodec524"]:c17(),["SharedCodec525"]:c18(),["UpdatePromotionRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
