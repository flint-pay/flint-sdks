import { d77 as c0, d464 as c1, d2082 as c2, d2083 as c3, d469 as c4, d467 as c5, d466 as c6, d465 as c7, d468 as c8, d2080 as c9, d2079 as c10, d2078 as c11, d2081 as c12 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2082 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2082;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRule"]:c1(),["PromotionRuleGroup"]:c2(),["PromotionRuleValue"]:c3(),["SharedCodec172"]:c4(),["SharedCodec173"]:c5(),["SharedCodec174"]:c6(),["SharedCodec175"]:c7(),["SharedCodec176"]:c8(),["SharedCodec539"]:c9(),["SharedCodec540"]:c10(),["SharedCodec541"]:c11(),["SharedCodec542"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
