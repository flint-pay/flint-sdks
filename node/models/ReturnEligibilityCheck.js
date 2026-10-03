import { d61 as c0, d907 as c1, d74 as c2, d1835 as c3, d2130 as c4, d2131 as c5, d2134 as c6, d2176 as c7, d2177 as c8, d2178 as c9, d2183 as c10, d2184 as c11, d2185 as c12, d2203 as c13, d2275 as c14, d60 as c15, d2132 as c16, d2133 as c17, d2342 as c18 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d2130 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2130;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["Image"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifier"]:c3(),["ReturnEligibilityCheck"]:c4(),["ReturnEligibilityCheckLineItem"]:c5(),["ReturnEligibilitySelection"]:c6(),["ReturnLineItemDecisionProposal"]:c7(),["ReturnLineItemEligibility"]:c8(),["ReturnLineItemRequest"]:c9(),["ReturnPolicyAdjustmentProposal"]:c10(),["ReturnPolicyEvaluation"]:c11(),["ReturnPolicyEvaluationLineItem"]:c12(),["ReturnReasonSummary"]:c13(),["SelectedProductOption"]:c14(),["SharedCodec16"]:c15(),["SharedCodec532"]:c16(),["SharedCodec533"]:c17(),["TextModifierRequest"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilityCheck(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
