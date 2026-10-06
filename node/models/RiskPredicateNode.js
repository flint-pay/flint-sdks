import { d77 as c0, d2290 as c1, d507 as c2, d498 as c3, d499 as c4, d501 as c5, d500 as c6, d502 as c7, d504 as c8, d503 as c9, d505 as c10, d506 as c11, d2287 as c12, d2286 as c13, d2288 as c14, d2289 as c15 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d2290 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2290;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNode"]:c1(),["SharedCodec182"]:c2(),["SharedCodec183"]:c3(),["SharedCodec184"]:c4(),["SharedCodec185"]:c5(),["SharedCodec186"]:c6(),["SharedCodec187"]:c7(),["SharedCodec188"]:c8(),["SharedCodec189"]:c9(),["SharedCodec190"]:c10(),["SharedCodec191"]:c11(),["SharedCodec597"]:c12(),["SharedCodec598"]:c13(),["SharedCodec599"]:c14(),["SharedCodec600"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNode(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
