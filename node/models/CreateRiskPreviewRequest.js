import { d403 as c0 } from '../descriptors/data/24.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c1 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10786 as c2, d10787 as c3, d10788 as c4, d10789 as c5, d10790 as c6, d10791 as c7, d10780 as c8, d10781 as c9, d10793 as c10, d10794 as c11, d10795 as c12, d10796 as c13, d10782 as c14, d10783 as c15, d10784 as c16, d10785 as c17 } from '../descriptors/data/512.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d403 as d403 } from '../descriptors/data/24.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d403;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRiskPreviewRequest"]:c0(),["MoneyValue"]:c1(),["RiskPredicateNodeComparisonRequest"]:c2(),["RiskPredicateNodeInListRequest"]:c3(),["RiskPredicateNodeInRequest"]:c4(),["RiskPredicateNodeIsMissingRequest"]:c5(),["RiskPredicateNodeMoneyComparisonRequest"]:c6(),["RiskPredicateNodeRequest"]:c7(),["SharedCodec563"]:c8(),["SharedCodec564"]:c9(),["SharedCodec565"]:c10(),["SharedCodec566"]:c11(),["SharedCodec567"]:c12(),["SharedCodec568"]:c13(),["SharedCodec569"]:c14(),["SharedCodec570"]:c15(),["SharedCodec571"]:c16(),["SharedCodec572"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRiskPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
