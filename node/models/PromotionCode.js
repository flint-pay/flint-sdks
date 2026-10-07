import { d77 as c0, d2063 as c1, d2066 as c2, d2068 as c3, d2062 as c4, d2071 as c5, d2072 as c6, d2064 as c7, d464 as c8, d2082 as c9, d2083 as c10, d2084 as c11, d469 as c12, d467 as c13, d466 as c14, d465 as c15, d468 as c16, d2065 as c17, d2080 as c18, d2079 as c19, d2078 as c20, d2081 as c21 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2068 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2068;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["Promotion"]:c1(),["PromotionApplicationMethod"]:c2(),["PromotionCode"]:c3(),["PromotionCodesSummary"]:c4(),["PromotionCombinesWith"]:c5(),["PromotionExclusivity"]:c6(),["PromotionRecurrence"]:c7(),["PromotionRule"]:c8(),["PromotionRuleGroup"]:c9(),["PromotionRuleValue"]:c10(),["PromotionSchedule"]:c11(),["SharedCodec172"]:c12(),["SharedCodec173"]:c13(),["SharedCodec174"]:c14(),["SharedCodec175"]:c15(),["SharedCodec176"]:c16(),["SharedCodec536"]:c17(),["SharedCodec539"]:c18(),["SharedCodec540"]:c19(),["SharedCodec541"]:c20(),["SharedCodec542"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCode(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
