import { d181 as c0, d174 as c1, d202 as c2, d205 as c3, d208 as c4, d209 as c5, d211 as c6, d222 as c7, d223 as c8, d265 as c9, d1719 as c10, d74 as c11, d1834 as c12, d70 as c13, d1992 as c14, d260 as c15, d259 as c16, d262 as c17, d261 as c18, d264 as c19, d263 as c20, d2044 as c21 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d265 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d265;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutCustomerConfig"]:c1(),["CheckoutExpirationConfig"]:c2(),["CheckoutPaymentConfig"]:c3(),["CheckoutPromotionConfig"]:c4(),["CheckoutQuickPayItemRequest"]:c5(),["CheckoutRedirectsConfig"]:c6(),["CheckoutTaxConfig"]:c7(),["CheckoutTipConfig"]:c8(),["CreateCheckoutSessionRequest"]:c9(),["LegalSettings"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTax"]:c12(),["PostalAddress"]:c13(),["PrefilledCustomerInfo"]:c14(),["SharedCodec65"]:c15(),["SharedCodec66"]:c16(),["SharedCodec67"]:c17(),["SharedCodec68"]:c18(),["SharedCodec69"]:c19(),["SharedCodec70"]:c20(),["ThemeConfig"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
