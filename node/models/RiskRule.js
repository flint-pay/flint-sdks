import { d77 as c0, d2264 as c1, d2265 as c2, d502 as c3, d493 as c4, d494 as c5, d496 as c6, d495 as c7, d497 as c8, d499 as c9, d498 as c10, d500 as c11, d501 as c12, d2261 as c13, d2260 as c14, d2262 as c15, d2263 as c16 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2265 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2265;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNode"]:c1(),["RiskRule"]:c2(),["SharedCodec182"]:c3(),["SharedCodec183"]:c4(),["SharedCodec184"]:c5(),["SharedCodec185"]:c6(),["SharedCodec186"]:c7(),["SharedCodec187"]:c8(),["SharedCodec188"]:c9(),["SharedCodec189"]:c10(),["SharedCodec190"]:c11(),["SharedCodec191"]:c12(),["SharedCodec595"]:c13(),["SharedCodec596"]:c14(),["SharedCodec597"]:c15(),["SharedCodec598"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskRule(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
