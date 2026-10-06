import { d77 as c0, d2212 as c1, d2213 as c2, d2219 as c3 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2213 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2213;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnLineItemDecisionProposal"]:c1(),["ReturnLineItemEligibility"]:c2(),["ReturnPolicyAdjustmentProposal"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnLineItemEligibility(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
