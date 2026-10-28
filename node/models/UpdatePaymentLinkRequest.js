import { d3220 as c0, d3206 as c25 } from '../descriptors/data/128.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3230 as c1, d3238 as c3 } from '../descriptors/data/129.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3312 as c2 } from '../descriptors/data/133.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3082 as c4 } from '../descriptors/data/120.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4085 as c5, d4086 as c28, d4087 as c29, d4088 as c30 } from '../descriptors/data/174.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3013 as c6 } from '../descriptors/data/116.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3251 as c7, d3254 as c26, d3250 as c27 } from '../descriptors/data/130.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4651 as c8 } from '../descriptors/data/206.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4654 as c9, d4656 as c10, d4659 as c11, d4661 as c12, d4664 as c13, d4665 as c14 } from '../descriptors/data/207.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4669 as c15, d4681 as c16, d4682 as c17 } from '../descriptors/data/208.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4683 as c18, d4684 as c19, d4685 as c20, d4686 as c23, d4687 as c24 } from '../descriptors/data/209.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3410 as c21 } from '../descriptors/data/138.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4480 as c22 } from '../descriptors/data/196.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d2468 as c31 } from '../descriptors/data/99.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d2468 as d2468 } from '../descriptors/data/99.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2468;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFields"]:c0(),["CheckoutPromotionConfig"]:c1(),["CheckoutTaxConfig"]:c2(),["CheckoutTipConfig"]:c3(),["ImageRequest"]:c4(),["InventoryRoutingSourceRequest"]:c5(),["MoneyValue"]:c6(),["OrderLineItemTax"]:c7(),["PaymentLinkCustomFieldPatchRequest"]:c8(),["PaymentLinkCustomTextPatchRequest"]:c9(),["PaymentLinkEventConfigPatchRequest"]:c10(),["PaymentLinkLegalPatchRequest"]:c11(),["PaymentLinkLineItemPatchRequest"]:c12(),["PaymentLinkPaymentPatchRequest"]:c13(),["PaymentLinkRedirectsPatchRequest"]:c14(),["PaymentLinkThemePatchRequest"]:c15(),["SharedCodec1003"]:c16(),["SharedCodec1004"]:c17(),["SharedCodec1005"]:c18(),["SharedCodec1006"]:c19(),["SharedCodec1007"]:c20(),["SharedCodec1174"]:c21(),["SharedCodec1205"]:c22(),["SharedCodec1215"]:c23(),["SharedCodec1216"]:c24(),["SharedCodec27"]:c25(),["SharedCodec37"]:c26(),["SharedCodec38"]:c27(),["SharedCodec859"]:c28(),["SharedCodec860"]:c29(),["SharedCodec861"]:c30(),["UpdatePaymentLinkRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
