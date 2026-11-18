import { d8228 as c0, d8229 as c1, d8231 as c2, d8232 as c3, d8233 as c4, d8234 as c9, d8227 as c18 } from '../descriptors/data/358.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8024 as c5, d8025 as c6, d8016 as c35, d8017 as c36, d8015 as c37 } from '../descriptors/data/346.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8662 as c7, d8659 as c20, d8660 as c21, d8661 as c22 } from '../descriptors/data/381.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7885 as c8 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10137 as c10, d10140 as c11, d10142 as c12, d10145 as c13 } from '../descriptors/data/466.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10147 as c14, d10150 as c15, d10153 as c16, d10158 as c17 } from '../descriptors/data/467.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9033 as c19 } from '../descriptors/data/404.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10173 as c23, d10178 as c24, d10179 as c25 } from '../descriptors/data/469.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10181 as c26, d10182 as c27, d10183 as c28, d10184 as c29, d10185 as c30, d10186 as c31, d10187 as c32, d10188 as c33, d10189 as c34 } from '../descriptors/data/470.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8358 as c38 } from '../descriptors/data/365.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9715 as c39, d9716 as c40 } from '../descriptors/data/443.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10196 as c41, d10197 as c42 } from '../descriptors/data/471.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7767 as c43 } from '../descriptors/data/326.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7767 as d7767 } from '../descriptors/data/326.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7767;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutTaxCalculationRequest"]:c2(),["CheckoutTaxConfigRequest"]:c3(),["CheckoutTipConfigRequest"]:c4(),["ImageInputFile"]:c5(),["ImageInputSourceURL"]:c6(),["InventoryRoutingSourceRequest"]:c7(),["MoneyValue"]:c8(),["OrderLineItemTaxRequest"]:c9(),["PaymentLinkCustomFieldPatchRequest"]:c10(),["PaymentLinkCustomTextPatchRequest"]:c11(),["PaymentLinkEventConfigPatchRequest"]:c12(),["PaymentLinkLegalPatchRequest"]:c13(),["PaymentLinkLineItemPatchRequest"]:c14(),["PaymentLinkPaymentPatchRequest"]:c15(),["PaymentLinkRedirectsPatchRequest"]:c16(),["PaymentLinkThemePatchRequest"]:c17(),["PlatformFeeMoney"]:c18(),["SharedCodec137"]:c19(),["SharedCodec1453"]:c20(),["SharedCodec1454"]:c21(),["SharedCodec1455"]:c22(),["SharedCodec2150"]:c23(),["SharedCodec2155"]:c24(),["SharedCodec2156"]:c25(),["SharedCodec2158"]:c26(),["SharedCodec2174"]:c27(),["SharedCodec2175"]:c28(),["SharedCodec2176"]:c29(),["SharedCodec2177"]:c30(),["SharedCodec2178"]:c31(),["SharedCodec2179"]:c32(),["SharedCodec2180"]:c33(),["SharedCodec2181"]:c34(),["SharedCodec3070"]:c35(),["SharedCodec3071"]:c36(),["SharedCodec3072"]:c37(),["SharedCodec3076"]:c38(),["SharedCodec3122"]:c39(),["SharedCodec3123"]:c40(),["SharedCodec3151"]:c41(),["SharedCodec3152"]:c42(),["UpdatePaymentLinkRequest"]:c43()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
