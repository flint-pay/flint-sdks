import { d501 as c0, d74 as c1, d2254 as c2, d499 as c3, d490 as c4, d491 as c5, d493 as c6, d492 as c7, d494 as c8, d496 as c9, d495 as c10, d497 as c11, d498 as c12, d2251 as c13, d2250 as c14, d2252 as c15, d2253 as c16 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d501 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d501;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRiskRuleRequest"]:c0(),["MoneyValue"]:c1(),["RiskPredicateNode"]:c2(),["SharedCodec180"]:c3(),["SharedCodec181"]:c4(),["SharedCodec182"]:c5(),["SharedCodec183"]:c6(),["SharedCodec184"]:c7(),["SharedCodec185"]:c8(),["SharedCodec186"]:c9(),["SharedCodec187"]:c10(),["SharedCodec188"]:c11(),["SharedCodec189"]:c12(),["SharedCodec584"]:c13(),["SharedCodec585"]:c14(),["SharedCodec586"]:c15(),["SharedCodec587"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRiskRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
