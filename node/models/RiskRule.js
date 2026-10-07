import { d314 as c0, d2245 as c1, d2246 as c2, d451 as c3, d442 as c4, d443 as c5, d445 as c6, d444 as c7, d446 as c8, d448 as c9, d447 as c10, d449 as c11, d450 as c12, d2242 as c13, d2241 as c14, d2243 as c15, d2244 as c16 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2246 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2246;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNode"]:c1(),["RiskRule"]:c2(),["SharedCodec144"]:c3(),["SharedCodec145"]:c4(),["SharedCodec146"]:c5(),["SharedCodec147"]:c6(),["SharedCodec148"]:c7(),["SharedCodec149"]:c8(),["SharedCodec150"]:c9(),["SharedCodec151"]:c10(),["SharedCodec152"]:c11(),["SharedCodec153"]:c12(),["SharedCodec554"]:c13(),["SharedCodec555"]:c14(),["SharedCodec556"]:c15(),["SharedCodec557"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskRule(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
