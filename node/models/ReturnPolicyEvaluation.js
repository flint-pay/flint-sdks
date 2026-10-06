import { d64 as c0, d926 as c1, d77 as c2, d1872 as c3, d2219 as c4, d2220 as c5, d2221 as c6, d2312 as c7, d63 as c8, d2380 as c9 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d2220 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2220;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["Image"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifier"]:c3(),["ReturnPolicyAdjustmentProposal"]:c4(),["ReturnPolicyEvaluation"]:c5(),["ReturnPolicyEvaluationLineItem"]:c6(),["SelectedProductOption"]:c7(),["SharedCodec17"]:c8(),["TextModifierRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyEvaluation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
