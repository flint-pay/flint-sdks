import { d183 as c0, d204 as c1, d207 as c2, d210 as c3, d213 as c4, d224 as c5, d225 as c6, d442 as c7, d909 as c8, d1611 as c9, d1721 as c10, d74 as c11, d1836 as c12, d1932 as c13, d1929 as c14, d1933 as c15, d1943 as c16, d1608 as c17, d1609 as c18, d1610 as c19, d1935 as c20, d1934 as c21, d1937 as c22, d1936 as c23, d1939 as c24, d1938 as c25, d1940 as c26, d2047 as c27 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d442 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d442;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutExpirationConfig"]:c1(),["CheckoutPaymentConfig"]:c2(),["CheckoutPromotionConfig"]:c3(),["CheckoutRedirectsConfig"]:c4(),["CheckoutTaxConfig"]:c5(),["CheckoutTipConfig"]:c6(),["CreatePaymentLinkRequest"]:c7(),["ImageRequest"]:c8(),["InventoryRoutingSourceRequest"]:c9(),["LegalSettings"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTax"]:c12(),["PaymentLinkCustomFieldRequest"]:c13(),["PaymentLinkCustomerConfig"]:c14(),["PaymentLinkEventConfig"]:c15(),["PaymentLinkLineItemRequest"]:c16(),["SharedCodec423"]:c17(),["SharedCodec424"]:c18(),["SharedCodec425"]:c19(),["SharedCodec499"]:c20(),["SharedCodec500"]:c21(),["SharedCodec501"]:c22(),["SharedCodec502"]:c23(),["SharedCodec503"]:c24(),["SharedCodec504"]:c25(),["SharedCodec505"]:c26(),["ThemeConfig"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
