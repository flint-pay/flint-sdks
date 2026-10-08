import { d152 as c0, d170 as c1, d174 as c2, d177 as c3, d180 as c4, d202 as c5, d203 as c6, d404 as c7, d891 as c8, d1629 as c9, d1750 as c10, d323 as c11, d1875 as c12, d1974 as c13, d1971 as c14, d1975 as c15, d1985 as c16, d1626 as c17, d1627 as c18, d1628 as c19, d1977 as c20, d1976 as c21, d1979 as c22, d1978 as c23, d1981 as c24, d1980 as c25, d1982 as c26, d2416 as c27 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d404 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d404;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutExpirationConfig"]:c1(),["CheckoutPaymentConfig"]:c2(),["CheckoutPromotionConfig"]:c3(),["CheckoutRedirectsConfig"]:c4(),["CheckoutTaxConfig"]:c5(),["CheckoutTipConfig"]:c6(),["CreatePaymentLinkRequest"]:c7(),["ImageRequest"]:c8(),["InventoryRoutingSourceRequest"]:c9(),["LegalSettings"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTax"]:c12(),["PaymentLinkCustomFieldRequest"]:c13(),["PaymentLinkCustomerConfig"]:c14(),["PaymentLinkEventConfig"]:c15(),["PaymentLinkLineItemRequest"]:c16(),["SharedCodec403"]:c17(),["SharedCodec404"]:c18(),["SharedCodec405"]:c19(),["SharedCodec491"]:c20(),["SharedCodec492"]:c21(),["SharedCodec493"]:c22(),["SharedCodec494"]:c23(),["SharedCodec495"]:c24(),["SharedCodec496"]:c25(),["SharedCodec497"]:c26(),["ThemeConfig"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
