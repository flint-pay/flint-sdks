import { d77 as c0, d1830 as c1, d1829 as c2, d2063 as c3, d2066 as c4, d2062 as c5, d2071 as c6, d2072 as c7, d2064 as c8, d2077 as c9, d464 as c10, d2082 as c11, d2083 as c12, d2084 as c13, d2164 as c14, d2165 as c15, d14 as c16, d469 as c17, d467 as c18, d466 as c19, d465 as c20, d468 as c21, d1828 as c22, d2065 as c23, d2080 as c24, d2079 as c25, d2078 as c26, d2081 as c27 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2077 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2077;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["Promotion"]:c3(),["PromotionApplicationMethod"]:c4(),["PromotionCodesSummary"]:c5(),["PromotionCombinesWith"]:c6(),["PromotionExclusivity"]:c7(),["PromotionRecurrence"]:c8(),["PromotionResponse"]:c9(),["PromotionRule"]:c10(),["PromotionRuleGroup"]:c11(),["PromotionRuleValue"]:c12(),["PromotionSchedule"]:c13(),["ResponseMeta"]:c14(),["ResponseWarning"]:c15(),["SharedCodec1"]:c16(),["SharedCodec172"]:c17(),["SharedCodec173"]:c18(),["SharedCodec174"]:c19(),["SharedCodec175"]:c20(),["SharedCodec176"]:c21(),["SharedCodec492"]:c22(),["SharedCodec536"]:c23(),["SharedCodec539"]:c24(),["SharedCodec540"]:c25(),["SharedCodec541"]:c26(),["SharedCodec542"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
