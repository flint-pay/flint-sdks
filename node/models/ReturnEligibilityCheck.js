import { d59 as c0, d61 as c1, d868 as c2, d314 as c3, d1829 as c4, d2121 as c5, d2122 as c6, d2125 as c7, d2167 as c8, d2168 as c9, d2169 as c10, d2174 as c11, d2175 as c12, d2176 as c13, d2194 as c14, d2268 as c15, d2123 as c16, d2124 as c17, d2331 as c18 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2121 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2121;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BundleComponentVariantSummary"]:c1(),["Image"]:c2(),["MoneyValue"]:c3(),["OrderLineItemModifier"]:c4(),["ReturnEligibilityCheck"]:c5(),["ReturnEligibilityCheckLineItem"]:c6(),["ReturnEligibilitySelection"]:c7(),["ReturnLineItemDecisionProposal"]:c8(),["ReturnLineItemEligibility"]:c9(),["ReturnLineItemRequest"]:c10(),["ReturnPolicyAdjustmentProposal"]:c11(),["ReturnPolicyEvaluation"]:c12(),["ReturnPolicyEvaluationLineItem"]:c13(),["ReturnReasonSummary"]:c14(),["SelectedProductOption"]:c15(),["SharedCodec502"]:c16(),["SharedCodec503"]:c17(),["TextModifierRequest"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilityCheck(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
