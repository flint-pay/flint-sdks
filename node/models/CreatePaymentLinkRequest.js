import { d148 as c0, d166 as c1, d169 as c2, d172 as c3, d175 as c4, d193 as c5, d194 as c6, d394 as c7, d870 as c8, d1584 as c9, d1705 as c10, d314 as c11, d1830 as c12, d1927 as c13, d1924 as c14, d1928 as c15, d1938 as c16, d1581 as c17, d1582 as c18, d1583 as c19, d1930 as c20, d1929 as c21, d1932 as c22, d1931 as c23, d1934 as c24, d1933 as c25, d1935 as c26, d2332 as c27 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d394 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d394;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutExpirationConfig"]:c1(),["CheckoutPaymentConfig"]:c2(),["CheckoutPromotionConfig"]:c3(),["CheckoutRedirectsConfig"]:c4(),["CheckoutTaxConfig"]:c5(),["CheckoutTipConfig"]:c6(),["CreatePaymentLinkRequest"]:c7(),["ImageRequest"]:c8(),["InventoryRoutingSourceRequest"]:c9(),["LegalSettings"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTax"]:c12(),["PaymentLinkCustomFieldRequest"]:c13(),["PaymentLinkCustomerConfig"]:c14(),["PaymentLinkEventConfig"]:c15(),["PaymentLinkLineItemRequest"]:c16(),["SharedCodec385"]:c17(),["SharedCodec386"]:c18(),["SharedCodec387"]:c19(),["SharedCodec473"]:c20(),["SharedCodec474"]:c21(),["SharedCodec475"]:c22(),["SharedCodec476"]:c23(),["SharedCodec477"]:c24(),["SharedCodec478"]:c25(),["SharedCodec479"]:c26(),["ThemeConfig"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
