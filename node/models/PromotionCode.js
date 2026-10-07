import { d314 as c0, d2010 as c1, d2012 as c2, d2014 as c3, d2017 as c4, d2018 as c5, d2019 as c6, d2021 as c7, d407 as c8, d2030 as c9, d2031 as c10, d2032 as c11, d412 as c12, d410 as c13, d409 as c14, d408 as c15, d411 as c16, d2011 as c17, d2028 as c18, d2027 as c19, d2026 as c20, d2029 as c21 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2014 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2014;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["Promotion"]:c1(),["PromotionApplicationMethod"]:c2(),["PromotionCode"]:c3(),["PromotionCodesSummary"]:c4(),["PromotionCombinesWith"]:c5(),["PromotionExclusivity"]:c6(),["PromotionRecurrence"]:c7(),["PromotionRule"]:c8(),["PromotionRuleGroup"]:c9(),["PromotionRuleValue"]:c10(),["PromotionSchedule"]:c11(),["SharedCodec134"]:c12(),["SharedCodec135"]:c13(),["SharedCodec136"]:c14(),["SharedCodec137"]:c15(),["SharedCodec138"]:c16(),["SharedCodec489"]:c17(),["SharedCodec492"]:c18(),["SharedCodec493"]:c19(),["SharedCodec494"]:c20(),["SharedCodec495"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCode(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
