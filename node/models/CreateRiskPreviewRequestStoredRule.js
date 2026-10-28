import { d264 as c0 } from '../descriptors/data/16.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c1 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5326 as c2, d5327 as c3, d5328 as c4, d5329 as c5, d5330 as c6, d5331 as c7, d5332 as c8, d5333 as c9, d5335 as c10, d5336 as c11, d5324 as c12, d5325 as c13 } from '../descriptors/data/251.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d264 as d264 } from '../descriptors/data/16.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d264;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRiskPreviewRequestStoredRule"]:c0(),["MoneyValue"]:c1(),["RiskPredicateNode"]:c2(),["RiskPredicateNodeAll"]:c3(),["RiskPredicateNodeAny"]:c4(),["RiskPredicateNodeComparison"]:c5(),["RiskPredicateNodeIn"]:c6(),["RiskPredicateNodeInList"]:c7(),["RiskPredicateNodeIsMissing"]:c8(),["RiskPredicateNodeMoneyComparison"]:c9(),["SharedCodec1203"]:c10(),["SharedCodec1204"]:c11(),["SharedCodec250"]:c12(),["SharedCodec251"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRiskPreviewRequestStoredRule(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
