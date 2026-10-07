import { d314 as c0, d2010 as c1, d2012 as c2, d2017 as c3, d2018 as c4, d2019 as c5, d2021 as c6, d407 as c7, d2030 as c8, d2031 as c9, d2032 as c10, d412 as c11, d410 as c12, d409 as c13, d408 as c14, d411 as c15, d2011 as c16, d2028 as c17, d2027 as c18, d2026 as c19, d2029 as c20 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2010 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2010;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["Promotion"]:c1(),["PromotionApplicationMethod"]:c2(),["PromotionCodesSummary"]:c3(),["PromotionCombinesWith"]:c4(),["PromotionExclusivity"]:c5(),["PromotionRecurrence"]:c6(),["PromotionRule"]:c7(),["PromotionRuleGroup"]:c8(),["PromotionRuleValue"]:c9(),["PromotionSchedule"]:c10(),["SharedCodec134"]:c11(),["SharedCodec135"]:c12(),["SharedCodec136"]:c13(),["SharedCodec137"]:c14(),["SharedCodec138"]:c15(),["SharedCodec489"]:c16(),["SharedCodec492"]:c17(),["SharedCodec493"]:c18(),["SharedCodec494"]:c19(),["SharedCodec495"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotion(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
