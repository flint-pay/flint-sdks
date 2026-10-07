import { d314 as c0, d1775 as c1, d1776 as c2, d2010 as c3, d2012 as c4, d2017 as c5, d2018 as c6, d2019 as c7, d2021 as c8, d2025 as c9, d407 as c10, d2030 as c11, d2031 as c12, d2032 as c13, d2112 as c14, d2113 as c15, d14 as c16, d412 as c17, d410 as c18, d409 as c19, d408 as c20, d411 as c21, d1774 as c22, d2011 as c23, d2028 as c24, d2027 as c25, d2026 as c26, d2029 as c27 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2025 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2025;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["Promotion"]:c3(),["PromotionApplicationMethod"]:c4(),["PromotionCodesSummary"]:c5(),["PromotionCombinesWith"]:c6(),["PromotionExclusivity"]:c7(),["PromotionRecurrence"]:c8(),["PromotionResponse"]:c9(),["PromotionRule"]:c10(),["PromotionRuleGroup"]:c11(),["PromotionRuleValue"]:c12(),["PromotionSchedule"]:c13(),["ResponseMeta"]:c14(),["ResponseWarning"]:c15(),["SharedCodec1"]:c16(),["SharedCodec134"]:c17(),["SharedCodec135"]:c18(),["SharedCodec136"]:c19(),["SharedCodec137"]:c20(),["SharedCodec138"]:c21(),["SharedCodec448"]:c22(),["SharedCodec489"]:c23(),["SharedCodec492"]:c24(),["SharedCodec493"]:c25(),["SharedCodec494"]:c26(),["SharedCodec495"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
