import { d59 as c0, d61 as c1, d889 as c2, d323 as c3, d1874 as c4, d2172 as c5, d2217 as c6, d2218 as c7, d2224 as c8, d2244 as c9, d2318 as c10, d2415 as c11 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2172 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2172;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BundleComponentVariantSummary"]:c1(),["Image"]:c2(),["MoneyValue"]:c3(),["OrderLineItemModifier"]:c4(),["ReturnEligibilityCheckLineItem"]:c5(),["ReturnLineItemDecisionProposal"]:c6(),["ReturnLineItemEligibility"]:c7(),["ReturnPolicyAdjustmentProposal"]:c8(),["ReturnReasonSummary"]:c9(),["SelectedProductOption"]:c10(),["TextModifierRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilityCheckLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
