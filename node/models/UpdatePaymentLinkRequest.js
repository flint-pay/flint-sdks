import { d8229 as c0, d8230 as c1, d8228 as c18 } from '../descriptors/data/359.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8232 as c2, d8233 as c3, d8234 as c4, d8235 as c9 } from '../descriptors/data/360.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8024 as c5, d8025 as c6, d8016 as c35, d8017 as c36, d8015 as c37 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8663 as c7, d8660 as c20, d8661 as c21, d8662 as c22 } from '../descriptors/data/382.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c8 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10137 as c10, d10140 as c11, d10142 as c12, d10145 as c13 } from '../descriptors/data/468.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10147 as c14, d10150 as c15, d10153 as c16, d10158 as c17 } from '../descriptors/data/469.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9034 as c19 } from '../descriptors/data/405.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10174 as c23, d10179 as c24, d10180 as c25 } from '../descriptors/data/471.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10182 as c26, d10183 as c27, d10184 as c28, d10185 as c29, d10186 as c30, d10187 as c31, d10188 as c32, d10189 as c33, d10190 as c34 } from '../descriptors/data/472.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8359 as c38 } from '../descriptors/data/366.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9717 as c39, d9718 as c40 } from '../descriptors/data/445.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10198 as c41, d10199 as c42 } from '../descriptors/data/473.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7767 as c43 } from '../descriptors/data/327.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7767 as d7767 } from '../descriptors/data/327.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7767;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutTaxCalculationRequest"]:c2(),["CheckoutTaxConfigRequest"]:c3(),["CheckoutTipConfigRequest"]:c4(),["ImageInputFile"]:c5(),["ImageInputSourceURL"]:c6(),["InventoryRoutingSourceRequest"]:c7(),["MoneyValue"]:c8(),["OrderLineItemTaxRequest"]:c9(),["PaymentLinkCustomFieldPatchRequest"]:c10(),["PaymentLinkCustomTextPatchRequest"]:c11(),["PaymentLinkEventConfigPatchRequest"]:c12(),["PaymentLinkLegalPatchRequest"]:c13(),["PaymentLinkLineItemPatchRequest"]:c14(),["PaymentLinkPaymentPatchRequest"]:c15(),["PaymentLinkRedirectsPatchRequest"]:c16(),["PaymentLinkThemePatchRequest"]:c17(),["PlatformFeeMoney"]:c18(),["SharedCodec137"]:c19(),["SharedCodec1454"]:c20(),["SharedCodec1455"]:c21(),["SharedCodec1456"]:c22(),["SharedCodec2148"]:c23(),["SharedCodec2153"]:c24(),["SharedCodec2154"]:c25(),["SharedCodec2156"]:c26(),["SharedCodec2172"]:c27(),["SharedCodec2173"]:c28(),["SharedCodec2174"]:c29(),["SharedCodec2175"]:c30(),["SharedCodec2176"]:c31(),["SharedCodec2177"]:c32(),["SharedCodec2178"]:c33(),["SharedCodec2179"]:c34(),["SharedCodec3070"]:c35(),["SharedCodec3071"]:c36(),["SharedCodec3072"]:c37(),["SharedCodec3076"]:c38(),["SharedCodec3122"]:c39(),["SharedCodec3123"]:c40(),["SharedCodec3151"]:c41(),["SharedCodec3152"]:c42(),["UpdatePaymentLinkRequest"]:c43()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
