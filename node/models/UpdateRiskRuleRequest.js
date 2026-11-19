import { d7918 as c0 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10786 as c1, d10787 as c2, d10788 as c3, d10789 as c4, d10790 as c5, d10791 as c6, d10793 as c7, d10794 as c8, d10795 as c9, d10796 as c10 } from '../descriptors/data/512.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7804 as c11 } from '../descriptors/data/330.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7804 as d7804 } from '../descriptors/data/330.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7804;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RiskPredicateNodeComparisonRequest"]:c1(),["RiskPredicateNodeInListRequest"]:c2(),["RiskPredicateNodeInRequest"]:c3(),["RiskPredicateNodeIsMissingRequest"]:c4(),["RiskPredicateNodeMoneyComparisonRequest"]:c5(),["RiskPredicateNodeRequest"]:c6(),["SharedCodec565"]:c7(),["SharedCodec566"]:c8(),["SharedCodec567"]:c9(),["SharedCodec568"]:c10(),["UpdateRiskRuleRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateRiskRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
