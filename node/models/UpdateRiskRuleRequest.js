import { d314 as c0, d2245 as c1, d451 as c2, d442 as c3, d443 as c4, d445 as c5, d444 as c6, d446 as c7, d448 as c8, d447 as c9, d449 as c10, d450 as c11, d2242 as c12, d2241 as c13, d2243 as c14, d2244 as c15, d2456 as c16 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2456 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2456;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNode"]:c1(),["SharedCodec144"]:c2(),["SharedCodec145"]:c3(),["SharedCodec146"]:c4(),["SharedCodec147"]:c5(),["SharedCodec148"]:c6(),["SharedCodec149"]:c7(),["SharedCodec150"]:c8(),["SharedCodec151"]:c9(),["SharedCodec152"]:c10(),["SharedCodec153"]:c11(),["SharedCodec554"]:c12(),["SharedCodec555"]:c13(),["SharedCodec556"]:c14(),["SharedCodec557"]:c15(),["UpdateRiskRuleRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateRiskRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
