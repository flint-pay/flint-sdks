import { d187 as c0, d180 as c1, d208 as c2, d211 as c3, d214 as c4, d215 as c5, d217 as c6, d230 as c7, d231 as c8, d273 as c9, d1751 as c10, d77 as c11, d1873 as c12, d73 as c13, d2033 as c14, d268 as c15, d267 as c16, d270 as c17, d269 as c18, d272 as c19, d271 as c20, d2083 as c21 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d273 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d273;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutCustomerConfig"]:c1(),["CheckoutExpirationConfig"]:c2(),["CheckoutPaymentConfig"]:c3(),["CheckoutPromotionConfig"]:c4(),["CheckoutQuickPayItemRequest"]:c5(),["CheckoutRedirectsConfig"]:c6(),["CheckoutTaxConfig"]:c7(),["CheckoutTipConfig"]:c8(),["CreateCheckoutSessionRequest"]:c9(),["LegalSettings"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTax"]:c12(),["PostalAddress"]:c13(),["PrefilledCustomerInfo"]:c14(),["SharedCodec66"]:c15(),["SharedCodec67"]:c16(),["SharedCodec68"]:c17(),["SharedCodec69"]:c18(),["SharedCodec70"]:c19(),["SharedCodec71"]:c20(),["ThemeConfig"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
