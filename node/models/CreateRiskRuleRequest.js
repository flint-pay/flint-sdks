import { d499 as c0, d74 as c1, d2251 as c2, d497 as c3, d488 as c4, d489 as c5, d491 as c6, d490 as c7, d492 as c8, d494 as c9, d493 as c10, d495 as c11, d496 as c12, d2248 as c13, d2247 as c14, d2249 as c15, d2250 as c16 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d499 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d499;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRiskRuleRequest"]:c0(),["MoneyValue"]:c1(),["RiskPredicateNode"]:c2(),["SharedCodec180"]:c3(),["SharedCodec181"]:c4(),["SharedCodec182"]:c5(),["SharedCodec183"]:c6(),["SharedCodec184"]:c7(),["SharedCodec185"]:c8(),["SharedCodec186"]:c9(),["SharedCodec187"]:c10(),["SharedCodec188"]:c11(),["SharedCodec189"]:c12(),["SharedCodec584"]:c13(),["SharedCodec585"]:c14(),["SharedCodec586"]:c15(),["SharedCodec587"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRiskRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
