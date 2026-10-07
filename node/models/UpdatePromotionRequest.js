import { d314 as c0, d2012 as c1, d2018 as c2, d2019 as c3, d2021 as c4, d407 as c5, d2030 as c6, d2031 as c7, d2032 as c8, d412 as c9, d410 as c10, d409 as c11, d408 as c12, d411 as c13, d2011 as c14, d2028 as c15, d2027 as c16, d2026 as c17, d2029 as c18, d2440 as c19 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2440 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2440;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethod"]:c1(),["PromotionCombinesWith"]:c2(),["PromotionExclusivity"]:c3(),["PromotionRecurrence"]:c4(),["PromotionRule"]:c5(),["PromotionRuleGroup"]:c6(),["PromotionRuleValue"]:c7(),["PromotionSchedule"]:c8(),["SharedCodec134"]:c9(),["SharedCodec135"]:c10(),["SharedCodec136"]:c11(),["SharedCodec137"]:c12(),["SharedCodec138"]:c13(),["SharedCodec489"]:c14(),["SharedCodec492"]:c15(),["SharedCodec493"]:c16(),["SharedCodec494"]:c17(),["SharedCodec495"]:c18(),["UpdatePromotionRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
