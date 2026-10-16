import { d472 as c0, d323 as c1, d2311 as c2, d471 as c3, d462 as c4, d463 as c5, d465 as c6, d464 as c7, d466 as c8, d468 as c9, d467 as c10, d469 as c11, d470 as c12, d2308 as c13, d2307 as c14, d2309 as c15, d2310 as c16 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d472 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d472;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRiskPreviewRequest"]:c0(),["MoneyValue"]:c1(),["RiskPredicateNode"]:c2(),["SharedCodec152"]:c3(),["SharedCodec153"]:c4(),["SharedCodec154"]:c5(),["SharedCodec155"]:c6(),["SharedCodec156"]:c7(),["SharedCodec157"]:c8(),["SharedCodec158"]:c9(),["SharedCodec159"]:c10(),["SharedCodec160"]:c11(),["SharedCodec161"]:c12(),["SharedCodec579"]:c13(),["SharedCodec580"]:c14(),["SharedCodec581"]:c15(),["SharedCodec582"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRiskPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
