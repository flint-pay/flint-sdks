import { d152 as c0, d145 as c1, d170 as c2, d174 as c3, d177 as c4, d178 as c5, d180 as c6, d201 as c7, d202 as c8, d203 as c9, d244 as c10, d1750 as c11, d323 as c12, d1875 as c13, d66 as c14, d2038 as c15, d199 as c16, d200 as c17, d239 as c18, d238 as c19, d241 as c20, d240 as c21, d243 as c22, d242 as c23, d2416 as c24 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d244 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d244;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutCustomerConfig"]:c1(),["CheckoutExpirationConfig"]:c2(),["CheckoutPaymentConfig"]:c3(),["CheckoutPromotionConfig"]:c4(),["CheckoutQuickPayItemRequest"]:c5(),["CheckoutRedirectsConfig"]:c6(),["CheckoutSubscriptionTermsRequest"]:c7(),["CheckoutTaxConfig"]:c8(),["CheckoutTipConfig"]:c9(),["CreateCheckoutSessionRequest"]:c10(),["LegalSettings"]:c11(),["MoneyValue"]:c12(),["OrderLineItemTax"]:c13(),["PostalAddress"]:c14(),["PrefilledCustomerInfo"]:c15(),["SharedCodec34"]:c16(),["SharedCodec35"]:c17(),["SharedCodec43"]:c18(),["SharedCodec44"]:c19(),["SharedCodec45"]:c20(),["SharedCodec46"]:c21(),["SharedCodec47"]:c22(),["SharedCodec48"]:c23(),["ThemeConfig"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
