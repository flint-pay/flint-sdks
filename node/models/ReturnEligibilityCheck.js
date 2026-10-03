import { d61 as c0, d905 as c1, d74 as c2, d1833 as c3, d2128 as c4, d2129 as c5, d2132 as c6, d2174 as c7, d2175 as c8, d2176 as c9, d2181 as c10, d2182 as c11, d2183 as c12, d2201 as c13, d2273 as c14, d60 as c15, d2130 as c16, d2131 as c17, d2340 as c18 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2128 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2128;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["Image"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifier"]:c3(),["ReturnEligibilityCheck"]:c4(),["ReturnEligibilityCheckLineItem"]:c5(),["ReturnEligibilitySelection"]:c6(),["ReturnLineItemDecisionProposal"]:c7(),["ReturnLineItemEligibility"]:c8(),["ReturnLineItemRequest"]:c9(),["ReturnPolicyAdjustmentProposal"]:c10(),["ReturnPolicyEvaluation"]:c11(),["ReturnPolicyEvaluationLineItem"]:c12(),["ReturnReasonSummary"]:c13(),["SelectedProductOption"]:c14(),["SharedCodec16"]:c15(),["SharedCodec532"]:c16(),["SharedCodec533"]:c17(),["TextModifierRequest"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilityCheck(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
