import { d60 as c0, d152 as c1, d69 as c2, d1686 as c3, d1687 as c4, d2109 as c5, d367 as c6, d366 as c7, d59 as c8, d2142 as c9, d2143 as c10, d2144 as c11, d2145 as c12, d2174 as c13 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2145 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2145;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifier"]:c3(),["OrderLineItemTax"]:c4(),["SelectedProductOption"]:c5(),["SharedCodec134"]:c6(),["SharedCodec135"]:c7(),["SharedCodec16"]:c8(),["SharedCodec543"]:c9(),["SharedCodec544"]:c10(),["SharedCodec545"]:c11(),["SubscriptionPlanLineItem"]:c12(),["TextModifierRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
