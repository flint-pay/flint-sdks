import { d365 as c0 } from '../descriptors/data/22.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c1 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8586 as c2, d8587 as c3, d8588 as c4, d8589 as c5, d8590 as c6, d8591 as c7, d8593 as c10, d8594 as c11, d8595 as c12, d8596 as c13 } from '../descriptors/data/423.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8580 as c8, d8581 as c9 } from '../descriptors/data/422.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d365 as d365 } from '../descriptors/data/22.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d365;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRiskPreviewRequestStoredRule"]:c0(),["MoneyValue"]:c1(),["RiskPredicateNodeComparisonRequest"]:c2(),["RiskPredicateNodeInListRequest"]:c3(),["RiskPredicateNodeInRequest"]:c4(),["RiskPredicateNodeIsMissingRequest"]:c5(),["RiskPredicateNodeMoneyComparisonRequest"]:c6(),["RiskPredicateNodeRequest"]:c7(),["SharedCodec407"]:c8(),["SharedCodec408"]:c9(),["SharedCodec409"]:c10(),["SharedCodec410"]:c11(),["SharedCodec411"]:c12(),["SharedCodec412"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRiskPreviewRequestStoredRule(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
