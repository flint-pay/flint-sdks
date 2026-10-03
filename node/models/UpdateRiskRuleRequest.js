import { d74 as c0, d2254 as c1, d499 as c2, d490 as c3, d491 as c4, d493 as c5, d492 as c6, d494 as c7, d496 as c8, d495 as c9, d497 as c10, d498 as c11, d2251 as c12, d2250 as c13, d2252 as c14, d2253 as c15, d2466 as c16 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d2466 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2466;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNode"]:c1(),["SharedCodec180"]:c2(),["SharedCodec181"]:c3(),["SharedCodec182"]:c4(),["SharedCodec183"]:c5(),["SharedCodec184"]:c6(),["SharedCodec185"]:c7(),["SharedCodec186"]:c8(),["SharedCodec187"]:c9(),["SharedCodec188"]:c10(),["SharedCodec189"]:c11(),["SharedCodec584"]:c12(),["SharedCodec585"]:c13(),["SharedCodec586"]:c14(),["SharedCodec587"]:c15(),["UpdateRiskRuleRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateRiskRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
