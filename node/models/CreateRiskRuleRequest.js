import { d463 as c0, d323 as c1, d2295 as c2, d461 as c3, d452 as c4, d453 as c5, d455 as c6, d454 as c7, d456 as c8, d458 as c9, d457 as c10, d459 as c11, d460 as c12, d2292 as c13, d2291 as c14, d2293 as c15, d2294 as c16 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d463 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d463;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRiskRuleRequest"]:c0(),["MoneyValue"]:c1(),["RiskPredicateNode"]:c2(),["SharedCodec146"]:c3(),["SharedCodec147"]:c4(),["SharedCodec148"]:c5(),["SharedCodec149"]:c6(),["SharedCodec150"]:c7(),["SharedCodec151"]:c8(),["SharedCodec152"]:c9(),["SharedCodec153"]:c10(),["SharedCodec154"]:c11(),["SharedCodec155"]:c12(),["SharedCodec574"]:c13(),["SharedCodec575"]:c14(),["SharedCodec576"]:c15(),["SharedCodec577"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRiskRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
