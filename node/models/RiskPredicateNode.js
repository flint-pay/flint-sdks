import { d323 as c0, d2311 as c1, d471 as c2, d462 as c3, d463 as c4, d465 as c5, d464 as c6, d466 as c7, d468 as c8, d467 as c9, d469 as c10, d470 as c11, d2308 as c12, d2307 as c13, d2309 as c14, d2310 as c15 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2311 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2311;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNode"]:c1(),["SharedCodec152"]:c2(),["SharedCodec153"]:c3(),["SharedCodec154"]:c4(),["SharedCodec155"]:c5(),["SharedCodec156"]:c6(),["SharedCodec157"]:c7(),["SharedCodec158"]:c8(),["SharedCodec159"]:c9(),["SharedCodec160"]:c10(),["SharedCodec161"]:c11(),["SharedCodec579"]:c12(),["SharedCodec580"]:c13(),["SharedCodec581"]:c14(),["SharedCodec582"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNode(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
