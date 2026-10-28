import { d3168 as c0 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5326 as c1, d5327 as c2, d5328 as c3, d5329 as c4, d5330 as c5, d5331 as c6, d5332 as c7, d5333 as c8, d5335 as c9, d5336 as c10 } from '../descriptors/data/251.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5326 as d5326 } from '../descriptors/data/251.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5326;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNode"]:c1(),["RiskPredicateNodeAll"]:c2(),["RiskPredicateNodeAny"]:c3(),["RiskPredicateNodeComparison"]:c4(),["RiskPredicateNodeIn"]:c5(),["RiskPredicateNodeInList"]:c6(),["RiskPredicateNodeIsMissing"]:c7(),["RiskPredicateNodeMoneyComparison"]:c8(),["SharedCodec1203"]:c9(),["SharedCodec1204"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNode(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
