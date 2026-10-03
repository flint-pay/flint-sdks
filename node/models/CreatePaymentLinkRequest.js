import { d181 as c0, d202 as c1, d205 as c2, d208 as c3, d211 as c4, d222 as c5, d223 as c6, d440 as c7, d907 as c8, d1609 as c9, d1719 as c10, d74 as c11, d1834 as c12, d1930 as c13, d1927 as c14, d1931 as c15, d1941 as c16, d1606 as c17, d1607 as c18, d1608 as c19, d1933 as c20, d1932 as c21, d1935 as c22, d1934 as c23, d1937 as c24, d1936 as c25, d1938 as c26, d2045 as c27 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d440 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d440;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutExpirationConfig"]:c1(),["CheckoutPaymentConfig"]:c2(),["CheckoutPromotionConfig"]:c3(),["CheckoutRedirectsConfig"]:c4(),["CheckoutTaxConfig"]:c5(),["CheckoutTipConfig"]:c6(),["CreatePaymentLinkRequest"]:c7(),["ImageRequest"]:c8(),["InventoryRoutingSourceRequest"]:c9(),["LegalSettings"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTax"]:c12(),["PaymentLinkCustomFieldRequest"]:c13(),["PaymentLinkCustomerConfig"]:c14(),["PaymentLinkEventConfig"]:c15(),["PaymentLinkLineItemRequest"]:c16(),["SharedCodec423"]:c17(),["SharedCodec424"]:c18(),["SharedCodec425"]:c19(),["SharedCodec499"]:c20(),["SharedCodec500"]:c21(),["SharedCodec501"]:c22(),["SharedCodec502"]:c23(),["SharedCodec503"]:c24(),["SharedCodec504"]:c25(),["SharedCodec505"]:c26(),["ThemeConfig"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
