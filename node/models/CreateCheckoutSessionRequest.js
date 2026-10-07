import { d192 as c0, d185 as c1, d209 as c2, d212 as c3, d215 as c4, d216 as c5, d218 as c6, d231 as c7, d232 as c8, d274 as c9, d1758 as c10, d77 as c11, d1880 as c12, d73 as c13, d2040 as c14, d269 as c15, d268 as c16, d271 as c17, d270 as c18, d273 as c19, d272 as c20, d2090 as c21 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d274 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d274;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutCustomerConfig"]:c1(),["CheckoutExpirationConfig"]:c2(),["CheckoutPaymentConfig"]:c3(),["CheckoutPromotionConfig"]:c4(),["CheckoutQuickPayItemRequest"]:c5(),["CheckoutRedirectsConfig"]:c6(),["CheckoutTaxConfig"]:c7(),["CheckoutTipConfig"]:c8(),["CreateCheckoutSessionRequest"]:c9(),["LegalSettings"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTax"]:c12(),["PostalAddress"]:c13(),["PrefilledCustomerInfo"]:c14(),["SharedCodec66"]:c15(),["SharedCodec67"]:c16(),["SharedCodec68"]:c17(),["SharedCodec69"]:c18(),["SharedCodec70"]:c19(),["SharedCodec71"]:c20(),["ThemeConfig"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
