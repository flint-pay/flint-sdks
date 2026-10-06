import { d77 as c0, d2290 as c1, d507 as c2, d498 as c3, d499 as c4, d501 as c5, d500 as c6, d502 as c7, d504 as c8, d503 as c9, d505 as c10, d506 as c11, d2287 as c12, d2286 as c13, d2288 as c14, d2289 as c15, d2504 as c16 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2504 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2504;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNode"]:c1(),["SharedCodec182"]:c2(),["SharedCodec183"]:c3(),["SharedCodec184"]:c4(),["SharedCodec185"]:c5(),["SharedCodec186"]:c6(),["SharedCodec187"]:c7(),["SharedCodec188"]:c8(),["SharedCodec189"]:c9(),["SharedCodec190"]:c10(),["SharedCodec191"]:c11(),["SharedCodec597"]:c12(),["SharedCodec598"]:c13(),["SharedCodec599"]:c14(),["SharedCodec600"]:c15(),["UpdateRiskRuleRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateRiskRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
