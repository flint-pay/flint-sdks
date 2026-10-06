import { d64 as c0, d926 as c1, d77 as c2, d1872 as c3, d2167 as c4, d2212 as c5, d2213 as c6, d2219 as c7, d2239 as c8, d2312 as c9, d63 as c10, d2380 as c11 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2167 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2167;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["Image"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifier"]:c3(),["ReturnEligibilityCheckLineItem"]:c4(),["ReturnLineItemDecisionProposal"]:c5(),["ReturnLineItemEligibility"]:c6(),["ReturnPolicyAdjustmentProposal"]:c7(),["ReturnReasonSummary"]:c8(),["SelectedProductOption"]:c9(),["SharedCodec17"]:c10(),["TextModifierRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilityCheckLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
