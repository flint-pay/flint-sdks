import { d64 as c0, d912 as c1, d77 as c2, d1846 as c3, d2141 as c4, d2186 as c5, d2187 as c6, d2193 as c7, d2213 as c8, d2286 as c9, d63 as c10, d2354 as c11 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2141 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2141;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["Image"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifier"]:c3(),["ReturnEligibilityCheckLineItem"]:c4(),["ReturnLineItemDecisionProposal"]:c5(),["ReturnLineItemEligibility"]:c6(),["ReturnPolicyAdjustmentProposal"]:c7(),["ReturnReasonSummary"]:c8(),["SelectedProductOption"]:c9(),["SharedCodec17"]:c10(),["TextModifierRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilityCheckLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
