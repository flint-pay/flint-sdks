import { d74 as c0, d1786 as c1, d1785 as c2, d2121 as c3, d2122 as c4, d2254 as c5, d2255 as c6, d2257 as c7, d499 as c8, d490 as c9, d491 as c10, d493 as c11, d492 as c12, d494 as c13, d496 as c14, d495 as c15, d497 as c16, d498 as c17, d2251 as c18, d2250 as c19, d2252 as c20, d2253 as c21 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d2257 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2257;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["RiskPredicateNode"]:c5(),["RiskRule"]:c6(),["RiskRuleListResponse"]:c7(),["SharedCodec180"]:c8(),["SharedCodec181"]:c9(),["SharedCodec182"]:c10(),["SharedCodec183"]:c11(),["SharedCodec184"]:c12(),["SharedCodec185"]:c13(),["SharedCodec186"]:c14(),["SharedCodec187"]:c15(),["SharedCodec188"]:c16(),["SharedCodec189"]:c17(),["SharedCodec584"]:c18(),["SharedCodec585"]:c19(),["SharedCodec586"]:c20(),["SharedCodec587"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskRuleListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
