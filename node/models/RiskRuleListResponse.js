import { d314 as c0, d1775 as c1, d1776 as c2, d2112 as c3, d2113 as c4, d2245 as c5, d2246 as c6, d2248 as c7, d14 as c8, d451 as c9, d442 as c10, d443 as c11, d445 as c12, d444 as c13, d446 as c14, d448 as c15, d447 as c16, d449 as c17, d450 as c18, d1774 as c19, d2242 as c20, d2241 as c21, d2243 as c22, d2244 as c23 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2248 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2248;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["RiskPredicateNode"]:c5(),["RiskRule"]:c6(),["RiskRuleListResponse"]:c7(),["SharedCodec1"]:c8(),["SharedCodec144"]:c9(),["SharedCodec145"]:c10(),["SharedCodec146"]:c11(),["SharedCodec147"]:c12(),["SharedCodec148"]:c13(),["SharedCodec149"]:c14(),["SharedCodec150"]:c15(),["SharedCodec151"]:c16(),["SharedCodec152"]:c17(),["SharedCodec153"]:c18(),["SharedCodec448"]:c19(),["SharedCodec554"]:c20(),["SharedCodec555"]:c21(),["SharedCodec556"]:c22(),["SharedCodec557"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskRuleListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
