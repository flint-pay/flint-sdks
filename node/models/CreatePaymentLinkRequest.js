import { d187 as c0, d208 as c1, d211 as c2, d214 as c3, d217 as c4, d230 as c5, d231 as c6, d450 as c7, d928 as c8, d1641 as c9, d1752 as c10, d77 as c11, d1874 as c12, d1970 as c13, d1967 as c14, d1971 as c15, d1981 as c16, d1638 as c17, d1639 as c18, d1640 as c19, d1973 as c20, d1972 as c21, d1975 as c22, d1974 as c23, d1977 as c24, d1976 as c25, d1978 as c26, d2084 as c27 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d450 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d450;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutExpirationConfig"]:c1(),["CheckoutPaymentConfig"]:c2(),["CheckoutPromotionConfig"]:c3(),["CheckoutRedirectsConfig"]:c4(),["CheckoutTaxConfig"]:c5(),["CheckoutTipConfig"]:c6(),["CreatePaymentLinkRequest"]:c7(),["ImageRequest"]:c8(),["InventoryRoutingSourceRequest"]:c9(),["LegalSettings"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTax"]:c12(),["PaymentLinkCustomFieldRequest"]:c13(),["PaymentLinkCustomerConfig"]:c14(),["PaymentLinkEventConfig"]:c15(),["PaymentLinkLineItemRequest"]:c16(),["SharedCodec431"]:c17(),["SharedCodec432"]:c18(),["SharedCodec433"]:c19(),["SharedCodec511"]:c20(),["SharedCodec512"]:c21(),["SharedCodec513"]:c22(),["SharedCodec514"]:c23(),["SharedCodec515"]:c24(),["SharedCodec516"]:c25(),["SharedCodec517"]:c26(),["ThemeConfig"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
