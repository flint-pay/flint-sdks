import { d77 as c0, d1830 as c1, d1829 as c2, d2164 as c3, d2165 as c4, d2297 as c5, d2298 as c6, d2301 as c7, d14 as c8, d508 as c9, d499 as c10, d500 as c11, d502 as c12, d501 as c13, d503 as c14, d505 as c15, d504 as c16, d506 as c17, d507 as c18, d1828 as c19, d2294 as c20, d2293 as c21, d2295 as c22, d2296 as c23 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2301 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2301;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["RiskPredicateNode"]:c5(),["RiskRule"]:c6(),["RiskRuleResponse"]:c7(),["SharedCodec1"]:c8(),["SharedCodec182"]:c9(),["SharedCodec183"]:c10(),["SharedCodec184"]:c11(),["SharedCodec185"]:c12(),["SharedCodec186"]:c13(),["SharedCodec187"]:c14(),["SharedCodec188"]:c15(),["SharedCodec189"]:c16(),["SharedCodec190"]:c17(),["SharedCodec191"]:c18(),["SharedCodec492"]:c19(),["SharedCodec602"]:c20(),["SharedCodec603"]:c21(),["SharedCodec604"]:c22(),["SharedCodec605"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskRuleResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
