import { d77 as c0, d1824 as c1, d1823 as c2, d2158 as c3, d2159 as c4, d2291 as c5, d2292 as c6, d2295 as c7, d14 as c8, d507 as c9, d498 as c10, d499 as c11, d501 as c12, d500 as c13, d502 as c14, d504 as c15, d503 as c16, d505 as c17, d506 as c18, d1822 as c19, d2288 as c20, d2287 as c21, d2289 as c22, d2290 as c23 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2295 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2295;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["RiskPredicateNode"]:c5(),["RiskRule"]:c6(),["RiskRuleResponse"]:c7(),["SharedCodec1"]:c8(),["SharedCodec182"]:c9(),["SharedCodec183"]:c10(),["SharedCodec184"]:c11(),["SharedCodec185"]:c12(),["SharedCodec186"]:c13(),["SharedCodec187"]:c14(),["SharedCodec188"]:c15(),["SharedCodec189"]:c16(),["SharedCodec190"]:c17(),["SharedCodec191"]:c18(),["SharedCodec488"]:c19(),["SharedCodec598"]:c20(),["SharedCodec599"]:c21(),["SharedCodec600"]:c22(),["SharedCodec601"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskRuleResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
