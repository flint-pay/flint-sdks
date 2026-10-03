import { d74 as c0, d1784 as c1, d1783 as c2, d2118 as c3, d2119 as c4, d2251 as c5, d2252 as c6, d2255 as c7, d497 as c8, d488 as c9, d489 as c10, d491 as c11, d490 as c12, d492 as c13, d494 as c14, d493 as c15, d495 as c16, d496 as c17, d2248 as c18, d2247 as c19, d2249 as c20, d2250 as c21 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2255 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2255;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["RiskPredicateNode"]:c5(),["RiskRule"]:c6(),["RiskRuleResponse"]:c7(),["SharedCodec180"]:c8(),["SharedCodec181"]:c9(),["SharedCodec182"]:c10(),["SharedCodec183"]:c11(),["SharedCodec184"]:c12(),["SharedCodec185"]:c13(),["SharedCodec186"]:c14(),["SharedCodec187"]:c15(),["SharedCodec188"]:c16(),["SharedCodec189"]:c17(),["SharedCodec584"]:c18(),["SharedCodec585"]:c19(),["SharedCodec586"]:c20(),["SharedCodec587"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskRuleResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
