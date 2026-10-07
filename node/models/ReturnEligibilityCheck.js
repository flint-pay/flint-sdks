import { d64 as c0, d926 as c1, d77 as c2, d1873 as c3, d2167 as c4, d2168 as c5, d2171 as c6, d2213 as c7, d2214 as c8, d2215 as c9, d2220 as c10, d2221 as c11, d2222 as c12, d2240 as c13, d2313 as c14, d63 as c15, d2169 as c16, d2170 as c17, d2381 as c18 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2167 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2167;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["Image"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifier"]:c3(),["ReturnEligibilityCheck"]:c4(),["ReturnEligibilityCheckLineItem"]:c5(),["ReturnEligibilitySelection"]:c6(),["ReturnLineItemDecisionProposal"]:c7(),["ReturnLineItemEligibility"]:c8(),["ReturnLineItemRequest"]:c9(),["ReturnPolicyAdjustmentProposal"]:c10(),["ReturnPolicyEvaluation"]:c11(),["ReturnPolicyEvaluationLineItem"]:c12(),["ReturnReasonSummary"]:c13(),["SelectedProductOption"]:c14(),["SharedCodec17"]:c15(),["SharedCodec546"]:c16(),["SharedCodec547"]:c17(),["TextModifierRequest"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilityCheck(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
