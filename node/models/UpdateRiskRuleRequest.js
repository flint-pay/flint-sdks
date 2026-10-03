import { d74 as c0, d2251 as c1, d497 as c2, d488 as c3, d489 as c4, d491 as c5, d490 as c6, d492 as c7, d494 as c8, d493 as c9, d495 as c10, d496 as c11, d2248 as c12, d2247 as c13, d2249 as c14, d2250 as c15, d2463 as c16 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2463 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2463;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNode"]:c1(),["SharedCodec180"]:c2(),["SharedCodec181"]:c3(),["SharedCodec182"]:c4(),["SharedCodec183"]:c5(),["SharedCodec184"]:c6(),["SharedCodec185"]:c7(),["SharedCodec186"]:c8(),["SharedCodec187"]:c9(),["SharedCodec188"]:c10(),["SharedCodec189"]:c11(),["SharedCodec584"]:c12(),["SharedCodec585"]:c13(),["SharedCodec586"]:c14(),["SharedCodec587"]:c15(),["UpdateRiskRuleRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateRiskRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
