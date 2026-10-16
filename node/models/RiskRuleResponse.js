import { d323 as c0, d1823 as c1, d1824 as c2, d2178 as c3, d2179 as c4, d2311 as c5, d2312 as c6, d2315 as c7, d14 as c8, d471 as c9, d462 as c10, d463 as c11, d465 as c12, d464 as c13, d466 as c14, d468 as c15, d467 as c16, d469 as c17, d470 as c18, d1822 as c19, d2308 as c20, d2307 as c21, d2309 as c22, d2310 as c23 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2315 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2315;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["RiskPredicateNode"]:c5(),["RiskRule"]:c6(),["RiskRuleResponse"]:c7(),["SharedCodec1"]:c8(),["SharedCodec152"]:c9(),["SharedCodec153"]:c10(),["SharedCodec154"]:c11(),["SharedCodec155"]:c12(),["SharedCodec156"]:c13(),["SharedCodec157"]:c14(),["SharedCodec158"]:c15(),["SharedCodec159"]:c16(),["SharedCodec160"]:c17(),["SharedCodec161"]:c18(),["SharedCodec467"]:c19(),["SharedCodec579"]:c20(),["SharedCodec580"]:c21(),["SharedCodec581"]:c22(),["SharedCodec582"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskRuleResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
