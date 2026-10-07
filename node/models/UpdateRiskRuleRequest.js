import { d77 as c0, d2291 as c1, d507 as c2, d498 as c3, d499 as c4, d501 as c5, d500 as c6, d502 as c7, d504 as c8, d503 as c9, d505 as c10, d506 as c11, d2288 as c12, d2287 as c13, d2289 as c14, d2290 as c15, d2505 as c16 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2505 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2505;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNode"]:c1(),["SharedCodec182"]:c2(),["SharedCodec183"]:c3(),["SharedCodec184"]:c4(),["SharedCodec185"]:c5(),["SharedCodec186"]:c6(),["SharedCodec187"]:c7(),["SharedCodec188"]:c8(),["SharedCodec189"]:c9(),["SharedCodec190"]:c10(),["SharedCodec191"]:c11(),["SharedCodec598"]:c12(),["SharedCodec599"]:c13(),["SharedCodec600"]:c14(),["SharedCodec601"]:c15(),["UpdateRiskRuleRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateRiskRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
