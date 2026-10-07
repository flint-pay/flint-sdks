import { d192 as c0, d209 as c1, d212 as c2, d215 as c3, d218 as c4, d231 as c5, d232 as c6, d451 as c7, d934 as c8, d1647 as c9, d1758 as c10, d77 as c11, d1880 as c12, d1976 as c13, d1973 as c14, d1977 as c15, d1987 as c16, d1644 as c17, d1645 as c18, d1646 as c19, d1979 as c20, d1978 as c21, d1981 as c22, d1980 as c23, d1983 as c24, d1982 as c25, d1984 as c26, d2090 as c27 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d451 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d451;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutExpirationConfig"]:c1(),["CheckoutPaymentConfig"]:c2(),["CheckoutPromotionConfig"]:c3(),["CheckoutRedirectsConfig"]:c4(),["CheckoutTaxConfig"]:c5(),["CheckoutTipConfig"]:c6(),["CreatePaymentLinkRequest"]:c7(),["ImageRequest"]:c8(),["InventoryRoutingSourceRequest"]:c9(),["LegalSettings"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTax"]:c12(),["PaymentLinkCustomFieldRequest"]:c13(),["PaymentLinkCustomerConfig"]:c14(),["PaymentLinkEventConfig"]:c15(),["PaymentLinkLineItemRequest"]:c16(),["SharedCodec435"]:c17(),["SharedCodec436"]:c18(),["SharedCodec437"]:c19(),["SharedCodec515"]:c20(),["SharedCodec516"]:c21(),["SharedCodec517"]:c22(),["SharedCodec518"]:c23(),["SharedCodec519"]:c24(),["SharedCodec520"]:c25(),["SharedCodec521"]:c26(),["ThemeConfig"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
