import { d314 as c0, d2167 as c1, d2168 as c2, d2174 as c3 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2168 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2168;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnLineItemDecisionProposal"]:c1(),["ReturnLineItemEligibility"]:c2(),["ReturnPolicyAdjustmentProposal"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnLineItemEligibility(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
