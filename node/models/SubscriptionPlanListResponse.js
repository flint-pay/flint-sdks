import { d60 as c0, d152 as c1, d811 as c2, d69 as c3, d1646 as c4, d1645 as c5, d1686 as c6, d1687 as c7, d1959 as c8, d1960 as c9, d2109 as c10, d367 as c11, d366 as c12, d59 as c13, d2142 as c14, d2143 as c15, d2144 as c16, d2141 as c17, d2145 as c18, d2151 as c19, d2174 as c20 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2151 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2151;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["Image"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["OrderLineItemModifier"]:c6(),["OrderLineItemTax"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SelectedProductOption"]:c10(),["SharedCodec134"]:c11(),["SharedCodec135"]:c12(),["SharedCodec16"]:c13(),["SharedCodec543"]:c14(),["SharedCodec544"]:c15(),["SharedCodec545"]:c16(),["SubscriptionPlan"]:c17(),["SubscriptionPlanLineItem"]:c18(),["SubscriptionPlanListResponse"]:c19(),["TextModifierRequest"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
