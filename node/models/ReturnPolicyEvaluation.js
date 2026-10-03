import { d61 as c0, d905 as c1, d74 as c2, d1833 as c3, d2180 as c4, d2181 as c5, d2182 as c6, d2272 as c7, d60 as c8, d2339 as c9 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2181 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2181;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["Image"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifier"]:c3(),["ReturnPolicyAdjustmentProposal"]:c4(),["ReturnPolicyEvaluation"]:c5(),["ReturnPolicyEvaluationLineItem"]:c6(),["SelectedProductOption"]:c7(),["SharedCodec16"]:c8(),["TextModifierRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyEvaluation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
