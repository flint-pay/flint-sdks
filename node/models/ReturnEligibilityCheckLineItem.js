import { d59 as c0, d61 as c1, d868 as c2, d314 as c3, d1829 as c4, d2122 as c5, d2167 as c6, d2168 as c7, d2174 as c8, d2194 as c9, d2268 as c10, d2331 as c11 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2122 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2122;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BundleComponentVariantSummary"]:c1(),["Image"]:c2(),["MoneyValue"]:c3(),["OrderLineItemModifier"]:c4(),["ReturnEligibilityCheckLineItem"]:c5(),["ReturnLineItemDecisionProposal"]:c6(),["ReturnLineItemEligibility"]:c7(),["ReturnPolicyAdjustmentProposal"]:c8(),["ReturnReasonSummary"]:c9(),["SelectedProductOption"]:c10(),["TextModifierRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilityCheckLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
