import { d187 as c0, d208 as c1, d211 as c2, d214 as c3, d217 as c4, d230 as c5, d231 as c6, d450 as c7, d928 as c8, d1640 as c9, d1751 as c10, d77 as c11, d1873 as c12, d1969 as c13, d1966 as c14, d1970 as c15, d1980 as c16, d1637 as c17, d1638 as c18, d1639 as c19, d1972 as c20, d1971 as c21, d1974 as c22, d1973 as c23, d1976 as c24, d1975 as c25, d1977 as c26, d2083 as c27 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d450 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d450;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutExpirationConfig"]:c1(),["CheckoutPaymentConfig"]:c2(),["CheckoutPromotionConfig"]:c3(),["CheckoutRedirectsConfig"]:c4(),["CheckoutTaxConfig"]:c5(),["CheckoutTipConfig"]:c6(),["CreatePaymentLinkRequest"]:c7(),["ImageRequest"]:c8(),["InventoryRoutingSourceRequest"]:c9(),["LegalSettings"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTax"]:c12(),["PaymentLinkCustomFieldRequest"]:c13(),["PaymentLinkCustomerConfig"]:c14(),["PaymentLinkEventConfig"]:c15(),["PaymentLinkLineItemRequest"]:c16(),["SharedCodec430"]:c17(),["SharedCodec431"]:c18(),["SharedCodec432"]:c19(),["SharedCodec510"]:c20(),["SharedCodec511"]:c21(),["SharedCodec512"]:c22(),["SharedCodec513"]:c23(),["SharedCodec514"]:c24(),["SharedCodec515"]:c25(),["SharedCodec516"]:c26(),["ThemeConfig"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
