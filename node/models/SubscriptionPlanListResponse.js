import { d64 as c0, d172 as c1, d912 as c2, d77 as c3, d1797 as c4, d1796 as c5, d1846 as c6, d1847 as c7, d2131 as c8, d2132 as c9, d2286 as c10, d14 as c11, d63 as c12, d1795 as c13, d1950 as c14, d1949 as c15, d2322 as c16, d2323 as c17, d2324 as c18, d2321 as c19, d2325 as c20, d2331 as c21, d2354 as c22 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2331 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2331;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["Image"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["OrderLineItemModifier"]:c6(),["OrderLineItemTax"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SelectedProductOption"]:c10(),["SharedCodec1"]:c11(),["SharedCodec17"]:c12(),["SharedCodec485"]:c13(),["SharedCodec512"]:c14(),["SharedCodec513"]:c15(),["SharedCodec606"]:c16(),["SharedCodec607"]:c17(),["SharedCodec608"]:c18(),["SubscriptionPlan"]:c19(),["SubscriptionPlanLineItem"]:c20(),["SubscriptionPlanListResponse"]:c21(),["TextModifierRequest"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
