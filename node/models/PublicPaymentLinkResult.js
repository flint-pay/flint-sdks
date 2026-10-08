import { d152 as c0, d174 as c1, d889 as c2, d1750 as c3, d323 as c4, d1875 as c5, d1972 as c6, d1975 as c7, d1983 as c8, d1988 as c9, d2085 as c10, d2087 as c11, d2088 as c12, d2089 as c13, d2090 as c14, d2091 as c15, d2092 as c16, d2093 as c17, d2318 as c18, d1977 as c19, d1976 as c20, d1979 as c21, d1978 as c22, d1981 as c23, d1980 as c24, d1982 as c25, d2416 as c26 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2087 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2087;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutPaymentConfig"]:c1(),["Image"]:c2(),["LegalSettings"]:c3(),["MoneyValue"]:c4(),["OrderLineItemTax"]:c5(),["PaymentLinkCustomField"]:c6(),["PaymentLinkEventConfig"]:c7(),["PaymentLinkLineItem"]:c8(),["PaymentLinkSubscriptionPreview"]:c9(),["PublicPaymentLink"]:c10(),["PublicPaymentLinkResult"]:c11(),["PublicResolvedBundleComponent"]:c12(),["PublicResolvedBundleVariantSummary"]:c13(),["PublicResolvedLineItemInfo"]:c14(),["PublicResolvedModifierGroup"]:c15(),["PublicResolvedModifierOption"]:c16(),["PublicResolvedTextModifier"]:c17(),["SelectedProductOption"]:c18(),["SharedCodec491"]:c19(),["SharedCodec492"]:c20(),["SharedCodec493"]:c21(),["SharedCodec494"]:c22(),["SharedCodec495"]:c23(),["SharedCodec496"]:c24(),["SharedCodec497"]:c25(),["ThemeConfig"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicPaymentLinkResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
