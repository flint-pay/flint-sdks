import { d8250 as c0, d8251 as c1, d8253 as c2, d8254 as c3, d8255 as c4, d8256 as c9, d8249 as c18 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8045 as c5, d8046 as c6 } from '../descriptors/data/353.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8684 as c7, d8681 as c20, d8682 as c21, d8683 as c22 } from '../descriptors/data/388.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c8 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10158 as c10, d10161 as c11, d10163 as c12, d10166 as c13 } from '../descriptors/data/474.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10168 as c14, d10171 as c15, d10174 as c16, d10179 as c17 } from '../descriptors/data/475.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9055 as c19 } from '../descriptors/data/411.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10195 as c23, d10200 as c24, d10201 as c25 } from '../descriptors/data/477.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10203 as c26, d10204 as c27, d10205 as c28, d10206 as c29, d10207 as c30, d10208 as c31, d10209 as c32, d10210 as c33, d10211 as c34 } from '../descriptors/data/478.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8037 as c35, d8038 as c36, d8036 as c37 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8380 as c38 } from '../descriptors/data/372.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9738 as c39, d9739 as c40 } from '../descriptors/data/451.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10219 as c41, d10220 as c42 } from '../descriptors/data/479.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7768 as c43 } from '../descriptors/data/328.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7768 as d7768 } from '../descriptors/data/328.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7768;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutTaxCalculationRequest"]:c2(),["CheckoutTaxConfigRequest"]:c3(),["CheckoutTipConfigRequest"]:c4(),["ImageInputFile"]:c5(),["ImageInputSourceURL"]:c6(),["InventoryRoutingSourceRequest"]:c7(),["MoneyValue"]:c8(),["OrderLineItemTaxRequest"]:c9(),["PaymentLinkCustomFieldPatchRequest"]:c10(),["PaymentLinkCustomTextPatchRequest"]:c11(),["PaymentLinkEventConfigPatchRequest"]:c12(),["PaymentLinkLegalPatchRequest"]:c13(),["PaymentLinkLineItemPatchRequest"]:c14(),["PaymentLinkPaymentPatchRequest"]:c15(),["PaymentLinkRedirectsPatchRequest"]:c16(),["PaymentLinkThemePatchRequest"]:c17(),["PlatformFeeMoney"]:c18(),["SharedCodec137"]:c19(),["SharedCodec1454"]:c20(),["SharedCodec1455"]:c21(),["SharedCodec1456"]:c22(),["SharedCodec2141"]:c23(),["SharedCodec2146"]:c24(),["SharedCodec2147"]:c25(),["SharedCodec2149"]:c26(),["SharedCodec2165"]:c27(),["SharedCodec2166"]:c28(),["SharedCodec2167"]:c29(),["SharedCodec2168"]:c30(),["SharedCodec2169"]:c31(),["SharedCodec2170"]:c32(),["SharedCodec2171"]:c33(),["SharedCodec2172"]:c34(),["SharedCodec3063"]:c35(),["SharedCodec3064"]:c36(),["SharedCodec3065"]:c37(),["SharedCodec3069"]:c38(),["SharedCodec3115"]:c39(),["SharedCodec3116"]:c40(),["SharedCodec3144"]:c41(),["SharedCodec3145"]:c42(),["UpdatePaymentLinkRequest"]:c43()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
