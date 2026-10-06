import { d184 as c0, d205 as c1, d208 as c2, d211 as c3, d214 as c4, d227 as c5, d228 as c6, d445 as c7, d914 as c8, d1615 as c9, d1726 as c10, d77 as c11, d1847 as c12, d1943 as c13, d1940 as c14, d1944 as c15, d1954 as c16, d1612 as c17, d1613 as c18, d1614 as c19, d1946 as c20, d1945 as c21, d1948 as c22, d1947 as c23, d1950 as c24, d1949 as c25, d1951 as c26, d2057 as c27 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d445 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d445;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutExpirationConfig"]:c1(),["CheckoutPaymentConfig"]:c2(),["CheckoutPromotionConfig"]:c3(),["CheckoutRedirectsConfig"]:c4(),["CheckoutTaxConfig"]:c5(),["CheckoutTipConfig"]:c6(),["CreatePaymentLinkRequest"]:c7(),["ImageRequest"]:c8(),["InventoryRoutingSourceRequest"]:c9(),["LegalSettings"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTax"]:c12(),["PaymentLinkCustomFieldRequest"]:c13(),["PaymentLinkCustomerConfig"]:c14(),["PaymentLinkEventConfig"]:c15(),["PaymentLinkLineItemRequest"]:c16(),["SharedCodec428"]:c17(),["SharedCodec429"]:c18(),["SharedCodec430"]:c19(),["SharedCodec508"]:c20(),["SharedCodec509"]:c21(),["SharedCodec510"]:c22(),["SharedCodec511"]:c23(),["SharedCodec512"]:c24(),["SharedCodec513"]:c25(),["SharedCodec514"]:c26(),["ThemeConfig"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
