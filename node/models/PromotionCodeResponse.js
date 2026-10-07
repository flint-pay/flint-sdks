import { d314 as c0, d1775 as c1, d1776 as c2, d2010 as c3, d2012 as c4, d2014 as c5, d2016 as c6, d2017 as c7, d2018 as c8, d2019 as c9, d2021 as c10, d407 as c11, d2030 as c12, d2031 as c13, d2032 as c14, d2112 as c15, d2113 as c16, d14 as c17, d412 as c18, d410 as c19, d409 as c20, d408 as c21, d411 as c22, d1774 as c23, d2011 as c24, d2028 as c25, d2027 as c26, d2026 as c27, d2029 as c28 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2016 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2016;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["Promotion"]:c3(),["PromotionApplicationMethod"]:c4(),["PromotionCode"]:c5(),["PromotionCodeResponse"]:c6(),["PromotionCodesSummary"]:c7(),["PromotionCombinesWith"]:c8(),["PromotionExclusivity"]:c9(),["PromotionRecurrence"]:c10(),["PromotionRule"]:c11(),["PromotionRuleGroup"]:c12(),["PromotionRuleValue"]:c13(),["PromotionSchedule"]:c14(),["ResponseMeta"]:c15(),["ResponseWarning"]:c16(),["SharedCodec1"]:c17(),["SharedCodec134"]:c18(),["SharedCodec135"]:c19(),["SharedCodec136"]:c20(),["SharedCodec137"]:c21(),["SharedCodec138"]:c22(),["SharedCodec448"]:c23(),["SharedCodec489"]:c24(),["SharedCodec492"]:c25(),["SharedCodec493"]:c26(),["SharedCodec494"]:c27(),["SharedCodec495"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCodeResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
