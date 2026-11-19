import { d8261 as c0, d8262 as c1, d8255 as c2, d8264 as c3, d8265 as c4, d8266 as c5, d8267 as c12, d8260 as c20 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d358 as c6 } from '../descriptors/data/20.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8056 as c7, d8057 as c8, d8063 as c9 } from '../descriptors/data/352.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8694 as c10, d8691 as c21, d8692 as c22, d8693 as c23 } from '../descriptors/data/387.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c11 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10182 as c13, d10183 as c14, d10187 as c15, d10188 as c16 } from '../descriptors/data/474.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10192 as c17, d10193 as c18, d10201 as c19 } from '../descriptors/data/475.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10218 as c24, d10223 as c25, d10224 as c26 } from '../descriptors/data/477.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10227 as c27, d10228 as c28, d10229 as c29, d10230 as c30, d10231 as c31 } from '../descriptors/data/478.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10236 as c32, d10237 as c33, d10238 as c34, d10239 as c35 } from '../descriptors/data/479.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10255 as c36, d10256 as c37, d10257 as c38 } from '../descriptors/data/480.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d358 as d358 } from '../descriptors/data/20.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d358;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutRedirectsRequest"]:c2(),["CheckoutTaxCalculationRequest"]:c3(),["CheckoutTaxConfigRequest"]:c4(),["CheckoutTipConfigRequest"]:c5(),["CreatePaymentLinkRequest"]:c6(),["ImageInputFile"]:c7(),["ImageInputSourceURL"]:c8(),["ImageRequest"]:c9(),["InventoryRoutingSourceRequest"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTaxRequest"]:c12(),["PaymentLinkCustomFieldRequest"]:c13(),["PaymentLinkCustomTextConfig"]:c14(),["PaymentLinkEventConfigRequest"]:c15(),["PaymentLinkLegalConfig"]:c16(),["PaymentLinkLineItemRequest"]:c17(),["PaymentLinkPaymentConfig"]:c18(),["PaymentLinkThemeConfig"]:c19(),["PlatformFeeMoney"]:c20(),["SharedCodec1455"]:c21(),["SharedCodec1456"]:c22(),["SharedCodec1457"]:c23(),["SharedCodec2143"]:c24(),["SharedCodec2148"]:c25(),["SharedCodec2149"]:c26(),["SharedCodec2167"]:c27(),["SharedCodec2168"]:c28(),["SharedCodec2169"]:c29(),["SharedCodec2170"]:c30(),["SharedCodec2171"]:c31(),["SharedCodec2178"]:c32(),["SharedCodec2179"]:c33(),["SharedCodec2180"]:c34(),["SharedCodec2181"]:c35(),["SharedCodec529"]:c36(),["SharedCodec530"]:c37(),["SharedCodec531"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
