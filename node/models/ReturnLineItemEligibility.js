import { d323 as c0, d2217 as c1, d2218 as c2, d2224 as c3 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2218 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2218;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnLineItemDecisionProposal"]:c1(),["ReturnLineItemEligibility"]:c2(),["ReturnPolicyAdjustmentProposal"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnLineItemEligibility(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
