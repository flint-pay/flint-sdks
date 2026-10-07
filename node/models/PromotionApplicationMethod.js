import { d77 as c0, d2066 as c1, d2064 as c2, d464 as c3, d2082 as c4, d2083 as c5, d469 as c6, d467 as c7, d466 as c8, d465 as c9, d468 as c10, d2065 as c11, d2080 as c12, d2079 as c13, d2078 as c14, d2081 as c15 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2066 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2066;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethod"]:c1(),["PromotionRecurrence"]:c2(),["PromotionRule"]:c3(),["PromotionRuleGroup"]:c4(),["PromotionRuleValue"]:c5(),["SharedCodec172"]:c6(),["SharedCodec173"]:c7(),["SharedCodec174"]:c8(),["SharedCodec175"]:c9(),["SharedCodec176"]:c10(),["SharedCodec536"]:c11(),["SharedCodec539"]:c12(),["SharedCodec540"]:c13(),["SharedCodec541"]:c14(),["SharedCodec542"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethod(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
