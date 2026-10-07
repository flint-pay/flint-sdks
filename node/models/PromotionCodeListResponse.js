import { d77 as c0, d1830 as c1, d1829 as c2, d2063 as c3, d2066 as c4, d2068 as c5, d2069 as c6, d2062 as c7, d2071 as c8, d2072 as c9, d2064 as c10, d464 as c11, d2082 as c12, d2083 as c13, d2084 as c14, d2164 as c15, d2165 as c16, d14 as c17, d469 as c18, d467 as c19, d466 as c20, d465 as c21, d468 as c22, d1828 as c23, d2065 as c24, d2080 as c25, d2079 as c26, d2078 as c27, d2081 as c28 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2069 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2069;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["Promotion"]:c3(),["PromotionApplicationMethod"]:c4(),["PromotionCode"]:c5(),["PromotionCodeListResponse"]:c6(),["PromotionCodesSummary"]:c7(),["PromotionCombinesWith"]:c8(),["PromotionExclusivity"]:c9(),["PromotionRecurrence"]:c10(),["PromotionRule"]:c11(),["PromotionRuleGroup"]:c12(),["PromotionRuleValue"]:c13(),["PromotionSchedule"]:c14(),["ResponseMeta"]:c15(),["ResponseWarning"]:c16(),["SharedCodec1"]:c17(),["SharedCodec172"]:c18(),["SharedCodec173"]:c19(),["SharedCodec174"]:c20(),["SharedCodec175"]:c21(),["SharedCodec176"]:c22(),["SharedCodec492"]:c23(),["SharedCodec536"]:c24(),["SharedCodec539"]:c25(),["SharedCodec540"]:c26(),["SharedCodec541"]:c27(),["SharedCodec542"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCodeListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
