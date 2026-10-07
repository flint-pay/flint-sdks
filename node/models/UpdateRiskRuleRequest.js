import { d77 as c0, d2297 as c1, d508 as c2, d499 as c3, d500 as c4, d502 as c5, d501 as c6, d503 as c7, d505 as c8, d504 as c9, d506 as c10, d507 as c11, d2294 as c12, d2293 as c13, d2295 as c14, d2296 as c15, d2511 as c16 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2511 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2511;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNode"]:c1(),["SharedCodec182"]:c2(),["SharedCodec183"]:c3(),["SharedCodec184"]:c4(),["SharedCodec185"]:c5(),["SharedCodec186"]:c6(),["SharedCodec187"]:c7(),["SharedCodec188"]:c8(),["SharedCodec189"]:c9(),["SharedCodec190"]:c10(),["SharedCodec191"]:c11(),["SharedCodec602"]:c12(),["SharedCodec603"]:c13(),["SharedCodec604"]:c14(),["SharedCodec605"]:c15(),["UpdateRiskRuleRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateRiskRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
