import { d510 as c0, d77 as c1, d2297 as c2, d508 as c3, d499 as c4, d500 as c5, d502 as c6, d501 as c7, d503 as c8, d505 as c9, d504 as c10, d506 as c11, d507 as c12, d2294 as c13, d2293 as c14, d2295 as c15, d2296 as c16 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d510 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d510;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRiskRuleRequest"]:c0(),["MoneyValue"]:c1(),["RiskPredicateNode"]:c2(),["SharedCodec182"]:c3(),["SharedCodec183"]:c4(),["SharedCodec184"]:c5(),["SharedCodec185"]:c6(),["SharedCodec186"]:c7(),["SharedCodec187"]:c8(),["SharedCodec188"]:c9(),["SharedCodec189"]:c10(),["SharedCodec190"]:c11(),["SharedCodec191"]:c12(),["SharedCodec602"]:c13(),["SharedCodec603"]:c14(),["SharedCodec604"]:c15(),["SharedCodec605"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRiskRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
