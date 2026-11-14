import { d5790 as c0 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1414 as c1 } from '../descriptors/data/67.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8564 as c2, d8565 as c3, d8566 as c4, d8567 as c5, d8568 as c6, d8569 as c7 } from '../descriptors/data/422.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8571 as c8, d8572 as c9, d8573 as c10, d8574 as c11 } from '../descriptors/data/423.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1414 as d1414 } from '../descriptors/data/67.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1414;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNodeAnyRequest"]:c1(),["RiskPredicateNodeComparisonRequest"]:c2(),["RiskPredicateNodeInListRequest"]:c3(),["RiskPredicateNodeInRequest"]:c4(),["RiskPredicateNodeIsMissingRequest"]:c5(),["RiskPredicateNodeMoneyComparisonRequest"]:c6(),["RiskPredicateNodeRequest"]:c7(),["SharedCodec415"]:c8(),["SharedCodec416"]:c9(),["SharedCodec417"]:c10(),["SharedCodec418"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeAnyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
