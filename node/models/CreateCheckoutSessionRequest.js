import { d184 as c0, d177 as c1, d205 as c2, d208 as c3, d211 as c4, d212 as c5, d214 as c6, d227 as c7, d228 as c8, d269 as c9, d1726 as c10, d77 as c11, d1847 as c12, d73 as c13, d2007 as c14, d264 as c15, d263 as c16, d266 as c17, d265 as c18, d268 as c19, d267 as c20, d2057 as c21 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d269 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d269;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutCustomerConfig"]:c1(),["CheckoutExpirationConfig"]:c2(),["CheckoutPaymentConfig"]:c3(),["CheckoutPromotionConfig"]:c4(),["CheckoutQuickPayItemRequest"]:c5(),["CheckoutRedirectsConfig"]:c6(),["CheckoutTaxConfig"]:c7(),["CheckoutTipConfig"]:c8(),["CreateCheckoutSessionRequest"]:c9(),["LegalSettings"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTax"]:c12(),["PostalAddress"]:c13(),["PrefilledCustomerInfo"]:c14(),["SharedCodec66"]:c15(),["SharedCodec67"]:c16(),["SharedCodec68"]:c17(),["SharedCodec69"]:c18(),["SharedCodec70"]:c19(),["SharedCodec71"]:c20(),["ThemeConfig"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
