import { d148 as c0, d169 as c1, d868 as c2, d1705 as c3, d314 as c4, d1830 as c5, d1925 as c6, d1928 as c7, d1936 as c8, d1941 as c9, d2036 as c10, d2038 as c11, d2039 as c12, d2040 as c13, d2041 as c14, d2042 as c15, d2043 as c16, d2044 as c17, d2268 as c18, d1930 as c19, d1929 as c20, d1932 as c21, d1931 as c22, d1934 as c23, d1933 as c24, d1935 as c25, d2332 as c26 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2038 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2038;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutPaymentConfig"]:c1(),["Image"]:c2(),["LegalSettings"]:c3(),["MoneyValue"]:c4(),["OrderLineItemTax"]:c5(),["PaymentLinkCustomField"]:c6(),["PaymentLinkEventConfig"]:c7(),["PaymentLinkLineItem"]:c8(),["PaymentLinkSubscriptionPreview"]:c9(),["PublicPaymentLink"]:c10(),["PublicPaymentLinkResult"]:c11(),["PublicResolvedBundleComponent"]:c12(),["PublicResolvedBundleVariantSummary"]:c13(),["PublicResolvedLineItemInfo"]:c14(),["PublicResolvedModifierGroup"]:c15(),["PublicResolvedModifierOption"]:c16(),["PublicResolvedTextModifier"]:c17(),["SelectedProductOption"]:c18(),["SharedCodec473"]:c19(),["SharedCodec474"]:c20(),["SharedCodec475"]:c21(),["SharedCodec476"]:c22(),["SharedCodec477"]:c23(),["SharedCodec478"]:c24(),["SharedCodec479"]:c25(),["ThemeConfig"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicPaymentLinkResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
