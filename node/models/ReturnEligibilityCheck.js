import { d64 as c0, d932 as c1, d77 as c2, d1879 as c3, d2173 as c4, d2174 as c5, d2177 as c6, d2219 as c7, d2220 as c8, d2221 as c9, d2226 as c10, d2227 as c11, d2228 as c12, d2246 as c13, d2319 as c14, d63 as c15, d2175 as c16, d2176 as c17, d2387 as c18 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2173 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2173;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["Image"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifier"]:c3(),["ReturnEligibilityCheck"]:c4(),["ReturnEligibilityCheckLineItem"]:c5(),["ReturnEligibilitySelection"]:c6(),["ReturnLineItemDecisionProposal"]:c7(),["ReturnLineItemEligibility"]:c8(),["ReturnLineItemRequest"]:c9(),["ReturnPolicyAdjustmentProposal"]:c10(),["ReturnPolicyEvaluation"]:c11(),["ReturnPolicyEvaluationLineItem"]:c12(),["ReturnReasonSummary"]:c13(),["SelectedProductOption"]:c14(),["SharedCodec17"]:c15(),["SharedCodec550"]:c16(),["SharedCodec551"]:c17(),["TextModifierRequest"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilityCheck(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
