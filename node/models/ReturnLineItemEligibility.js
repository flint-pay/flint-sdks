import { d323 as c0, d2217 as c1, d2218 as c2, d2224 as c3 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2218 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2218;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnLineItemDecisionProposal"]:c1(),["ReturnLineItemEligibility"]:c2(),["ReturnPolicyAdjustmentProposal"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnLineItemEligibility(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
