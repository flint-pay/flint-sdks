import { d8261 as c0, d8262 as c1, d8264 as c2, d8265 as c3, d8266 as c4, d8267 as c9, d8260 as c18 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8056 as c5, d8057 as c6 } from '../descriptors/data/352.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8694 as c7, d8691 as c20, d8692 as c21, d8693 as c22 } from '../descriptors/data/387.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c8 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10181 as c10, d10184 as c11, d10186 as c12, d10189 as c13 } from '../descriptors/data/474.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10191 as c14, d10194 as c15, d10197 as c16, d10202 as c17 } from '../descriptors/data/475.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9067 as c19 } from '../descriptors/data/410.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10218 as c23, d10223 as c24, d10224 as c25 } from '../descriptors/data/477.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10227 as c26, d10228 as c27, d10229 as c28, d10230 as c29, d10231 as c30, d10232 as c31, d10233 as c32, d10234 as c33, d10235 as c34 } from '../descriptors/data/478.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8048 as c35, d8049 as c36, d8047 as c37 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8391 as c38 } from '../descriptors/data/371.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9759 as c39, d9760 as c40 } from '../descriptors/data/451.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10243 as c41, d10244 as c42 } from '../descriptors/data/479.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10245 as c43, d10255 as c44 } from '../descriptors/data/480.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7777 as c45 } from '../descriptors/data/328.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7777 as d7777 } from '../descriptors/data/328.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7777;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutTaxCalculationRequest"]:c2(),["CheckoutTaxConfigRequest"]:c3(),["CheckoutTipConfigRequest"]:c4(),["ImageInputFile"]:c5(),["ImageInputSourceURL"]:c6(),["InventoryRoutingSourceRequest"]:c7(),["MoneyValue"]:c8(),["OrderLineItemTaxRequest"]:c9(),["PaymentLinkCustomFieldPatchRequest"]:c10(),["PaymentLinkCustomTextPatchRequest"]:c11(),["PaymentLinkEventConfigPatchRequest"]:c12(),["PaymentLinkLegalPatchRequest"]:c13(),["PaymentLinkLineItemPatchRequest"]:c14(),["PaymentLinkPaymentPatchRequest"]:c15(),["PaymentLinkRedirectsPatchRequest"]:c16(),["PaymentLinkThemePatchRequest"]:c17(),["PlatformFeeMoney"]:c18(),["SharedCodec137"]:c19(),["SharedCodec1455"]:c20(),["SharedCodec1456"]:c21(),["SharedCodec1457"]:c22(),["SharedCodec2143"]:c23(),["SharedCodec2148"]:c24(),["SharedCodec2149"]:c25(),["SharedCodec2167"]:c26(),["SharedCodec2168"]:c27(),["SharedCodec2169"]:c28(),["SharedCodec2170"]:c29(),["SharedCodec2171"]:c30(),["SharedCodec2172"]:c31(),["SharedCodec2173"]:c32(),["SharedCodec2174"]:c33(),["SharedCodec2175"]:c34(),["SharedCodec3069"]:c35(),["SharedCodec3070"]:c36(),["SharedCodec3071"]:c37(),["SharedCodec3075"]:c38(),["SharedCodec3127"]:c39(),["SharedCodec3128"]:c40(),["SharedCodec3156"]:c41(),["SharedCodec3157"]:c42(),["SharedCodec3158"]:c43(),["SharedCodec529"]:c44(),["UpdatePaymentLinkRequest"]:c45()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
