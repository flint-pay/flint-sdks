import { d323 as c0, d2233 as c1, d2234 as c2, d2240 as c3 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2234 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2234;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnLineItemDecisionProposal"]:c1(),["ReturnLineItemEligibility"]:c2(),["ReturnPolicyAdjustmentProposal"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnLineItemEligibility(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
