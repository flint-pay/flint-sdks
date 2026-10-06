import { d77 as c0, d1797 as c1, d1796 as c2, d2131 as c3, d2132 as c4, d2264 as c5, d2265 as c6, d2268 as c7, d14 as c8, d502 as c9, d493 as c10, d494 as c11, d496 as c12, d495 as c13, d497 as c14, d499 as c15, d498 as c16, d500 as c17, d501 as c18, d1795 as c19, d2261 as c20, d2260 as c21, d2262 as c22, d2263 as c23 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2268 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2268;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["RiskPredicateNode"]:c5(),["RiskRule"]:c6(),["RiskRuleResponse"]:c7(),["SharedCodec1"]:c8(),["SharedCodec182"]:c9(),["SharedCodec183"]:c10(),["SharedCodec184"]:c11(),["SharedCodec185"]:c12(),["SharedCodec186"]:c13(),["SharedCodec187"]:c14(),["SharedCodec188"]:c15(),["SharedCodec189"]:c16(),["SharedCodec190"]:c17(),["SharedCodec191"]:c18(),["SharedCodec485"]:c19(),["SharedCodec595"]:c20(),["SharedCodec596"]:c21(),["SharedCodec597"]:c22(),["SharedCodec598"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskRuleResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
