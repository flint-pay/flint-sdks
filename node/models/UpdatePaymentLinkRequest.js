import { d8273 as c0, d8274 as c1, d8272 as c18 } from '../descriptors/data/365.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8276 as c2, d8277 as c3, d8278 as c4, d8279 as c9 } from '../descriptors/data/366.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8066 as c5, d8067 as c6 } from '../descriptors/data/353.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8709 as c7, d8706 as c20, d8707 as c21, d8708 as c22 } from '../descriptors/data/388.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7928 as c8 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10196 as c10, d10199 as c11, d10201 as c12, d10204 as c13 } from '../descriptors/data/474.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10206 as c14, d10209 as c15, d10212 as c16, d10217 as c17 } from '../descriptors/data/475.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9081 as c19 } from '../descriptors/data/411.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10233 as c23, d10238 as c24, d10239 as c25 } from '../descriptors/data/477.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10242 as c26, d10243 as c27, d10244 as c28, d10245 as c29, d10246 as c30, d10247 as c31, d10248 as c32, d10249 as c33, d10250 as c34 } from '../descriptors/data/478.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8058 as c35, d8059 as c36, d8057 as c37 } from '../descriptors/data/352.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8403 as c38 } from '../descriptors/data/372.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9774 as c39, d9775 as c40 } from '../descriptors/data/451.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10258 as c41, d10259 as c42 } from '../descriptors/data/479.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10260 as c43, d10270 as c44 } from '../descriptors/data/480.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7788 as c45 } from '../descriptors/data/328.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7788 as d7788 } from '../descriptors/data/328.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7788;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutTaxCalculationRequest"]:c2(),["CheckoutTaxConfigRequest"]:c3(),["CheckoutTipConfigRequest"]:c4(),["ImageInputFile"]:c5(),["ImageInputSourceURL"]:c6(),["InventoryRoutingSourceRequest"]:c7(),["MoneyValue"]:c8(),["OrderLineItemTaxRequest"]:c9(),["PaymentLinkCustomFieldPatchRequest"]:c10(),["PaymentLinkCustomTextPatchRequest"]:c11(),["PaymentLinkEventConfigPatchRequest"]:c12(),["PaymentLinkLegalPatchRequest"]:c13(),["PaymentLinkLineItemPatchRequest"]:c14(),["PaymentLinkPaymentPatchRequest"]:c15(),["PaymentLinkRedirectsPatchRequest"]:c16(),["PaymentLinkThemePatchRequest"]:c17(),["PlatformFeeMoney"]:c18(),["SharedCodec138"]:c19(),["SharedCodec1460"]:c20(),["SharedCodec1461"]:c21(),["SharedCodec1462"]:c22(),["SharedCodec2148"]:c23(),["SharedCodec2153"]:c24(),["SharedCodec2154"]:c25(),["SharedCodec2172"]:c26(),["SharedCodec2173"]:c27(),["SharedCodec2174"]:c28(),["SharedCodec2175"]:c29(),["SharedCodec2176"]:c30(),["SharedCodec2177"]:c31(),["SharedCodec2178"]:c32(),["SharedCodec2179"]:c33(),["SharedCodec2180"]:c34(),["SharedCodec3079"]:c35(),["SharedCodec3080"]:c36(),["SharedCodec3081"]:c37(),["SharedCodec3085"]:c38(),["SharedCodec3137"]:c39(),["SharedCodec3138"]:c40(),["SharedCodec3166"]:c41(),["SharedCodec3167"]:c42(),["SharedCodec3168"]:c43(),["SharedCodec533"]:c44(),["UpdatePaymentLinkRequest"]:c45()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
