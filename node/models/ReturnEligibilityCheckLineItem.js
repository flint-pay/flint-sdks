import { d59 as c0, d61 as c1, d894 as c2, d323 as c3, d1879 as c4, d2188 as c5, d2233 as c6, d2234 as c7, d2240 as c8, d2260 as c9, d2334 as c10, d2431 as c11 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2188 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2188;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BundleComponentVariantSummary"]:c1(),["Image"]:c2(),["MoneyValue"]:c3(),["OrderLineItemModifier"]:c4(),["ReturnEligibilityCheckLineItem"]:c5(),["ReturnLineItemDecisionProposal"]:c6(),["ReturnLineItemEligibility"]:c7(),["ReturnPolicyAdjustmentProposal"]:c8(),["ReturnReasonSummary"]:c9(),["SelectedProductOption"]:c10(),["TextModifierRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilityCheckLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
