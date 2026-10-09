import { d59 as c0, d61 as c1, d889 as c2, d323 as c3, d1874 as c4, d2224 as c5, d2225 as c6, d2226 as c7, d2318 as c8, d2415 as c9 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2225 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2225;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BundleComponentVariantSummary"]:c1(),["Image"]:c2(),["MoneyValue"]:c3(),["OrderLineItemModifier"]:c4(),["ReturnPolicyAdjustmentProposal"]:c5(),["ReturnPolicyEvaluation"]:c6(),["ReturnPolicyEvaluationLineItem"]:c7(),["SelectedProductOption"]:c8(),["TextModifierRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyEvaluation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
