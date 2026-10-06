import { d77 as c0, d2290 as c1, d2291 as c2, d507 as c3, d498 as c4, d499 as c5, d501 as c6, d500 as c7, d502 as c8, d504 as c9, d503 as c10, d505 as c11, d506 as c12, d2287 as c13, d2286 as c14, d2288 as c15, d2289 as c16 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2291 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2291;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNode"]:c1(),["RiskRule"]:c2(),["SharedCodec182"]:c3(),["SharedCodec183"]:c4(),["SharedCodec184"]:c5(),["SharedCodec185"]:c6(),["SharedCodec186"]:c7(),["SharedCodec187"]:c8(),["SharedCodec188"]:c9(),["SharedCodec189"]:c10(),["SharedCodec190"]:c11(),["SharedCodec191"]:c12(),["SharedCodec597"]:c13(),["SharedCodec598"]:c14(),["SharedCodec599"]:c15(),["SharedCodec600"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskRule(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
