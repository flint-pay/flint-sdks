import { d3168 as c0 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5326 as c1, d5327 as c2, d5328 as c3, d5329 as c4, d5330 as c5, d5331 as c6, d5332 as c7, d5333 as c8, d5335 as c10, d5336 as c11 } from '../descriptors/data/251.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d1023 as c9 } from '../descriptors/data/50.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d1023 as d1023 } from '../descriptors/data/50.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1023;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNode"]:c1(),["RiskPredicateNodeAll"]:c2(),["RiskPredicateNodeAny"]:c3(),["RiskPredicateNodeComparison"]:c4(),["RiskPredicateNodeIn"]:c5(),["RiskPredicateNodeInList"]:c6(),["RiskPredicateNodeIsMissing"]:c7(),["RiskPredicateNodeMoneyComparison"]:c8(),["RiskPredicateNodeNot"]:c9(),["SharedCodec1203"]:c10(),["SharedCodec1204"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeNot(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
