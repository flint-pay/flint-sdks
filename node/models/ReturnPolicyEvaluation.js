import { d61 as c0, d905 as c1, d74 as c2, d1833 as c3, d2181 as c4, d2182 as c5, d2183 as c6, d2273 as c7, d60 as c8, d2340 as c9 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2182 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2182;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["Image"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifier"]:c3(),["ReturnPolicyAdjustmentProposal"]:c4(),["ReturnPolicyEvaluation"]:c5(),["ReturnPolicyEvaluationLineItem"]:c6(),["SelectedProductOption"]:c7(),["SharedCodec16"]:c8(),["TextModifierRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyEvaluation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
