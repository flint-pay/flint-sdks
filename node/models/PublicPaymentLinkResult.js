import { d152 as c0, d174 as c1, d894 as c2, d1753 as c3, d323 as c4, d1880 as c5, d1983 as c6, d1987 as c7, d1997 as c8, d2004 as c9, d2103 as c10, d2105 as c11, d2106 as c12, d2107 as c13, d2108 as c14, d2109 as c15, d2110 as c16, d2111 as c17, d2334 as c18, d1991 as c19, d1990 as c20, d1993 as c21, d1992 as c22, d1995 as c23, d1994 as c24, d1996 as c25, d2432 as c26 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2105 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2105;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextWriteConfig"]:c0(),["CheckoutPaymentConfig"]:c1(),["Image"]:c2(),["LegalSettings"]:c3(),["MoneyValue"]:c4(),["OrderLineItemTax"]:c5(),["PaymentLinkCustomField"]:c6(),["PaymentLinkEventConfig"]:c7(),["PaymentLinkLineItem"]:c8(),["PaymentLinkSubscriptionPreview"]:c9(),["PublicPaymentLink"]:c10(),["PublicPaymentLinkResult"]:c11(),["PublicResolvedBundleComponent"]:c12(),["PublicResolvedBundleVariantSummary"]:c13(),["PublicResolvedLineItemInfo"]:c14(),["PublicResolvedModifierGroup"]:c15(),["PublicResolvedModifierOption"]:c16(),["PublicResolvedTextModifier"]:c17(),["SelectedProductOption"]:c18(),["SharedCodec496"]:c19(),["SharedCodec497"]:c20(),["SharedCodec498"]:c21(),["SharedCodec499"]:c22(),["SharedCodec500"]:c23(),["SharedCodec501"]:c24(),["SharedCodec502"]:c25(),["ThemeConfig"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicPaymentLinkResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
