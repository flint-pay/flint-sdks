import { d59 as c0, d61 as c1, d889 as c2, d323 as c3, d1874 as c4, d2171 as c5, d2172 as c6, d2175 as c7, d2217 as c8, d2218 as c9, d2219 as c10, d2224 as c11, d2225 as c12, d2226 as c13, d2244 as c14, d2318 as c15, d2173 as c16, d2174 as c17, d2415 as c18 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2171 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2171;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BundleComponentVariantSummary"]:c1(),["Image"]:c2(),["MoneyValue"]:c3(),["OrderLineItemModifier"]:c4(),["ReturnEligibilityCheck"]:c5(),["ReturnEligibilityCheckLineItem"]:c6(),["ReturnEligibilitySelection"]:c7(),["ReturnLineItemDecisionProposal"]:c8(),["ReturnLineItemEligibility"]:c9(),["ReturnLineItemRequest"]:c10(),["ReturnPolicyAdjustmentProposal"]:c11(),["ReturnPolicyEvaluation"]:c12(),["ReturnPolicyEvaluationLineItem"]:c13(),["ReturnReasonSummary"]:c14(),["SelectedProductOption"]:c15(),["SharedCodec522"]:c16(),["SharedCodec523"]:c17(),["TextModifierRequest"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilityCheck(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
