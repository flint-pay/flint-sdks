import { d183 as c0, d176 as c1, d204 as c2, d207 as c3, d210 as c4, d211 as c5, d213 as c6, d224 as c7, d225 as c8, d267 as c9, d1721 as c10, d74 as c11, d1836 as c12, d70 as c13, d1995 as c14, d262 as c15, d261 as c16, d264 as c17, d263 as c18, d266 as c19, d265 as c20, d2047 as c21 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d267 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d267;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutCustomerConfig"]:c1(),["CheckoutExpirationConfig"]:c2(),["CheckoutPaymentConfig"]:c3(),["CheckoutPromotionConfig"]:c4(),["CheckoutQuickPayItemRequest"]:c5(),["CheckoutRedirectsConfig"]:c6(),["CheckoutTaxConfig"]:c7(),["CheckoutTipConfig"]:c8(),["CreateCheckoutSessionRequest"]:c9(),["LegalSettings"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTax"]:c12(),["PostalAddress"]:c13(),["PrefilledCustomerInfo"]:c14(),["SharedCodec65"]:c15(),["SharedCodec66"]:c16(),["SharedCodec67"]:c17(),["SharedCodec68"]:c18(),["SharedCodec69"]:c19(),["SharedCodec70"]:c20(),["ThemeConfig"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
