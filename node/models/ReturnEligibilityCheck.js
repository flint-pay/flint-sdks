import { d60 as c0, d811 as c1, d69 as c2, d1686 as c3, d1968 as c4, d1969 as c5, d1972 as c6, d2014 as c7, d2015 as c8, d2016 as c9, d2021 as c10, d2022 as c11, d2023 as c12, d2041 as c13, d2109 as c14, d59 as c15, d1970 as c16, d1971 as c17, d2174 as c18 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1968 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1968;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["Image"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifier"]:c3(),["ReturnEligibilityCheck"]:c4(),["ReturnEligibilityCheckLineItem"]:c5(),["ReturnEligibilitySelection"]:c6(),["ReturnLineItemDecisionProposal"]:c7(),["ReturnLineItemEligibility"]:c8(),["ReturnLineItemRequest"]:c9(),["ReturnPolicyAdjustmentProposal"]:c10(),["ReturnPolicyEvaluation"]:c11(),["ReturnPolicyEvaluationLineItem"]:c12(),["ReturnReasonSummary"]:c13(),["SelectedProductOption"]:c14(),["SharedCodec16"]:c15(),["SharedCodec483"]:c16(),["SharedCodec484"]:c17(),["TextModifierRequest"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilityCheck(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
