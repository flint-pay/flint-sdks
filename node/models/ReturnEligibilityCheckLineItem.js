import { d61 as c0, d907 as c1, d74 as c2, d1835 as c3, d2131 as c4, d2176 as c5, d2177 as c6, d2183 as c7, d2203 as c8, d2275 as c9, d60 as c10, d2342 as c11 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2131 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2131;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["Image"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifier"]:c3(),["ReturnEligibilityCheckLineItem"]:c4(),["ReturnLineItemDecisionProposal"]:c5(),["ReturnLineItemEligibility"]:c6(),["ReturnPolicyAdjustmentProposal"]:c7(),["ReturnReasonSummary"]:c8(),["SelectedProductOption"]:c9(),["SharedCodec16"]:c10(),["TextModifierRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilityCheckLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
