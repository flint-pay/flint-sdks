import { d60 as c0, d811 as c1, d69 as c2, d1686 as c3, d1969 as c4, d2014 as c5, d2015 as c6, d2021 as c7, d2041 as c8, d2109 as c9, d59 as c10, d2174 as c11 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1969 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1969;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["Image"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifier"]:c3(),["ReturnEligibilityCheckLineItem"]:c4(),["ReturnLineItemDecisionProposal"]:c5(),["ReturnLineItemEligibility"]:c6(),["ReturnPolicyAdjustmentProposal"]:c7(),["ReturnReasonSummary"]:c8(),["SelectedProductOption"]:c9(),["SharedCodec16"]:c10(),["TextModifierRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilityCheckLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
