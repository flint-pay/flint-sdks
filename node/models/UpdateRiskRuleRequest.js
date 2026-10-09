import { d323 as c0, d2295 as c1, d461 as c2, d452 as c3, d453 as c4, d455 as c5, d454 as c6, d456 as c7, d458 as c8, d457 as c9, d459 as c10, d460 as c11, d2292 as c12, d2291 as c13, d2293 as c14, d2294 as c15, d2543 as c16 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2543 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2543;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNode"]:c1(),["SharedCodec146"]:c2(),["SharedCodec147"]:c3(),["SharedCodec148"]:c4(),["SharedCodec149"]:c5(),["SharedCodec150"]:c6(),["SharedCodec151"]:c7(),["SharedCodec152"]:c8(),["SharedCodec153"]:c9(),["SharedCodec154"]:c10(),["SharedCodec155"]:c11(),["SharedCodec574"]:c12(),["SharedCodec575"]:c13(),["SharedCodec576"]:c14(),["SharedCodec577"]:c15(),["UpdateRiskRuleRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateRiskRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
