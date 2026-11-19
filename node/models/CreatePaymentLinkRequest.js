import { d8250 as c0, d8251 as c1, d8244 as c2, d8253 as c3, d8254 as c4, d8255 as c5, d8256 as c12, d8249 as c20 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d356 as c6 } from '../descriptors/data/20.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8045 as c7, d8046 as c8, d8052 as c9 } from '../descriptors/data/353.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8684 as c10, d8681 as c21, d8682 as c22, d8683 as c23 } from '../descriptors/data/388.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c11 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10159 as c13, d10160 as c14, d10164 as c15, d10165 as c16 } from '../descriptors/data/474.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10169 as c17, d10170 as c18, d10178 as c19 } from '../descriptors/data/475.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10195 as c24, d10200 as c25, d10201 as c26 } from '../descriptors/data/477.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10203 as c27, d10204 as c28, d10205 as c29, d10206 as c30, d10207 as c31 } from '../descriptors/data/478.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10212 as c32, d10213 as c33, d10214 as c34, d10215 as c35 } from '../descriptors/data/479.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10230 as c36, d10231 as c37 } from '../descriptors/data/480.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d356 as d356 } from '../descriptors/data/20.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d356;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutRedirectsRequest"]:c2(),["CheckoutTaxCalculationRequest"]:c3(),["CheckoutTaxConfigRequest"]:c4(),["CheckoutTipConfigRequest"]:c5(),["CreatePaymentLinkRequest"]:c6(),["ImageInputFile"]:c7(),["ImageInputSourceURL"]:c8(),["ImageRequest"]:c9(),["InventoryRoutingSourceRequest"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTaxRequest"]:c12(),["PaymentLinkCustomFieldRequest"]:c13(),["PaymentLinkCustomTextConfig"]:c14(),["PaymentLinkEventConfigRequest"]:c15(),["PaymentLinkLegalConfig"]:c16(),["PaymentLinkLineItemRequest"]:c17(),["PaymentLinkPaymentConfig"]:c18(),["PaymentLinkThemeConfig"]:c19(),["PlatformFeeMoney"]:c20(),["SharedCodec1454"]:c21(),["SharedCodec1455"]:c22(),["SharedCodec1456"]:c23(),["SharedCodec2141"]:c24(),["SharedCodec2146"]:c25(),["SharedCodec2147"]:c26(),["SharedCodec2149"]:c27(),["SharedCodec2165"]:c28(),["SharedCodec2166"]:c29(),["SharedCodec2167"]:c30(),["SharedCodec2168"]:c31(),["SharedCodec2175"]:c32(),["SharedCodec2176"]:c33(),["SharedCodec2177"]:c34(),["SharedCodec2178"]:c35(),["SharedCodec529"]:c36(),["SharedCodec530"]:c37()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
