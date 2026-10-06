import { d77 as c0, d2264 as c1, d502 as c2, d493 as c3, d494 as c4, d496 as c5, d495 as c6, d497 as c7, d499 as c8, d498 as c9, d500 as c10, d501 as c11, d2261 as c12, d2260 as c13, d2262 as c14, d2263 as c15, d2478 as c16 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2478 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2478;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNode"]:c1(),["SharedCodec182"]:c2(),["SharedCodec183"]:c3(),["SharedCodec184"]:c4(),["SharedCodec185"]:c5(),["SharedCodec186"]:c6(),["SharedCodec187"]:c7(),["SharedCodec188"]:c8(),["SharedCodec189"]:c9(),["SharedCodec190"]:c10(),["SharedCodec191"]:c11(),["SharedCodec595"]:c12(),["SharedCodec596"]:c13(),["SharedCodec597"]:c14(),["SharedCodec598"]:c15(),["UpdateRiskRuleRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateRiskRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
