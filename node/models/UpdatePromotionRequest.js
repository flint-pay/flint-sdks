import { d77 as c0, d2066 as c1, d2071 as c2, d2072 as c3, d2064 as c4, d464 as c5, d2082 as c6, d2083 as c7, d2084 as c8, d469 as c9, d467 as c10, d466 as c11, d465 as c12, d468 as c13, d2065 as c14, d2080 as c15, d2079 as c16, d2078 as c17, d2081 as c18, d2495 as c19 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2495 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2495;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethod"]:c1(),["PromotionCombinesWith"]:c2(),["PromotionExclusivity"]:c3(),["PromotionRecurrence"]:c4(),["PromotionRule"]:c5(),["PromotionRuleGroup"]:c6(),["PromotionRuleValue"]:c7(),["PromotionSchedule"]:c8(),["SharedCodec172"]:c9(),["SharedCodec173"]:c10(),["SharedCodec174"]:c11(),["SharedCodec175"]:c12(),["SharedCodec176"]:c13(),["SharedCodec536"]:c14(),["SharedCodec539"]:c15(),["SharedCodec540"]:c16(),["SharedCodec541"]:c17(),["SharedCodec542"]:c18(),["UpdatePromotionRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
