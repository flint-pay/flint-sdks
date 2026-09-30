import { d60 as c0, d152 as c1, d811 as c2, d69 as c3, d1686 as c4, d1687 as c5, d2109 as c6, d367 as c7, d366 as c8, d59 as c9, d2142 as c10, d2143 as c11, d2144 as c12, d2141 as c13, d2145 as c14, d2174 as c15 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2141 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2141;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["Image"]:c2(),["MoneyValue"]:c3(),["OrderLineItemModifier"]:c4(),["OrderLineItemTax"]:c5(),["SelectedProductOption"]:c6(),["SharedCodec134"]:c7(),["SharedCodec135"]:c8(),["SharedCodec16"]:c9(),["SharedCodec543"]:c10(),["SharedCodec544"]:c11(),["SharedCodec545"]:c12(),["SubscriptionPlan"]:c13(),["SubscriptionPlanLineItem"]:c14(),["TextModifierRequest"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlan(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
