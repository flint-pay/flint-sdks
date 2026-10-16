import { d59 as c0, d61 as c1, d894 as c2, d323 as c3, d1879 as c4, d2187 as c5, d2188 as c6, d2191 as c7, d2233 as c8, d2234 as c9, d2235 as c10, d2240 as c11, d2241 as c12, d2242 as c13, d2260 as c14, d2334 as c15, d2189 as c16, d2190 as c17, d2431 as c18 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2187 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2187;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BundleComponentVariantSummary"]:c1(),["Image"]:c2(),["MoneyValue"]:c3(),["OrderLineItemModifier"]:c4(),["ReturnEligibilityCheck"]:c5(),["ReturnEligibilityCheckLineItem"]:c6(),["ReturnEligibilitySelection"]:c7(),["ReturnLineItemDecisionProposal"]:c8(),["ReturnLineItemEligibility"]:c9(),["ReturnLineItemRequest"]:c10(),["ReturnPolicyAdjustmentProposal"]:c11(),["ReturnPolicyEvaluation"]:c12(),["ReturnPolicyEvaluationLineItem"]:c13(),["ReturnReasonSummary"]:c14(),["SelectedProductOption"]:c15(),["SharedCodec527"]:c16(),["SharedCodec528"]:c17(),["TextModifierRequest"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilityCheck(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
