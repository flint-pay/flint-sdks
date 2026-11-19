import { d7886 as c0 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10739 as c1, d10740 as c2, d10741 as c3, d10742 as c4, d10743 as c5, d10744 as c7, d10746 as c8, d10747 as c9, d10748 as c10, d10749 as c11 } from '../descriptors/data/506.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1882 as c6 } from '../descriptors/data/94.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1882 as d1882 } from '../descriptors/data/94.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1882;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNodeComparisonRequest"]:c1(),["RiskPredicateNodeInListRequest"]:c2(),["RiskPredicateNodeInRequest"]:c3(),["RiskPredicateNodeIsMissingRequest"]:c4(),["RiskPredicateNodeMoneyComparisonRequest"]:c5(),["RiskPredicateNodeNotRequest"]:c6(),["RiskPredicateNodeRequest"]:c7(),["SharedCodec564"]:c8(),["SharedCodec565"]:c9(),["SharedCodec566"]:c10(),["SharedCodec567"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeNotRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
