import { d463 as c0, d470 as c1, d77 as c2, d2066 as c3, d2071 as c4, d2072 as c5, d2064 as c6, d464 as c7, d2082 as c8, d2083 as c9, d2084 as c10, d469 as c11, d467 as c12, d466 as c13, d465 as c14, d468 as c15, d2065 as c16, d2080 as c17, d2079 as c18, d2078 as c19, d2081 as c20 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d470 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d470;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionCodeRequest"]:c0(),["CreatePromotionRequest"]:c1(),["MoneyValue"]:c2(),["PromotionApplicationMethod"]:c3(),["PromotionCombinesWith"]:c4(),["PromotionExclusivity"]:c5(),["PromotionRecurrence"]:c6(),["PromotionRule"]:c7(),["PromotionRuleGroup"]:c8(),["PromotionRuleValue"]:c9(),["PromotionSchedule"]:c10(),["SharedCodec172"]:c11(),["SharedCodec173"]:c12(),["SharedCodec174"]:c13(),["SharedCodec175"]:c14(),["SharedCodec176"]:c15(),["SharedCodec536"]:c16(),["SharedCodec539"]:c17(),["SharedCodec540"]:c18(),["SharedCodec541"]:c19(),["SharedCodec542"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
