import { d5814 as c0 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8586 as c1, d8587 as c2, d8588 as c3, d8589 as c4, d8590 as c5, d8591 as c6, d8593 as c7, d8594 as c8, d8595 as c9, d8596 as c10 } from '../descriptors/data/423.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5726 as c11 } from '../descriptors/data/252.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5726 as d5726 } from '../descriptors/data/252.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5726;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNodeComparisonRequest"]:c1(),["RiskPredicateNodeInListRequest"]:c2(),["RiskPredicateNodeInRequest"]:c3(),["RiskPredicateNodeIsMissingRequest"]:c4(),["RiskPredicateNodeMoneyComparisonRequest"]:c5(),["RiskPredicateNodeRequest"]:c6(),["SharedCodec409"]:c7(),["SharedCodec410"]:c8(),["SharedCodec411"]:c9(),["SharedCodec412"]:c10(),["UpdateRiskRuleRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateRiskRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
