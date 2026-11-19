import { d8135 as c0, d8133 as c21, d8134 as c24 } from '../descriptors/data/358.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8250 as c1, d8251 as c6, d8244 as c7, d8252 as c8, d8253 as c9, d8254 as c10, d8255 as c11, d8249 as c16, d8248 as c17, d8238 as c18, d8239 as c19, d8240 as c20, d8246 as c22, d8247 as c23, d8257 as c25, d8258 as c26, d8241 as c27, d8242 as c28, d8243 as c29, d8259 as c35 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8064 as c2, d8065 as c3, d8066 as c4, d8067 as c5, d8071 as c12 } from '../descriptors/data/354.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d253 as c13 } from '../descriptors/data/12.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8035 as c14 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c15 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8088 as c30, d8089 as c31, d8090 as c32 } from '../descriptors/data/355.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8101 as c33, d8102 as c34 } from '../descriptors/data/356.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8114 as c36 } from '../descriptors/data/357.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d253 as d253 } from '../descriptors/data/12.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d253;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutRedirectsRequest"]:c7(),["CheckoutSubscriptionTermsRequest"]:c8(),["CheckoutTaxCalculationRequest"]:c9(),["CheckoutTaxConfigRequest"]:c10(),["CheckoutTipConfigRequest"]:c11(),["CreateCheckoutSessionDiscount"]:c12(),["CreateCheckoutSessionSubscriptionPlan"]:c13(),["MetadataRequest"]:c14(),["MoneyValue"]:c15(),["PlatformFeeMoney"]:c16(),["PlatformFeeRequest"]:c17(),["PromotionRefInputPromotionCode"]:c18(),["PromotionRefInputPromotionID"]:c19(),["PromotionRefRequest"]:c20(),["SharedCodec2"]:c21(),["SharedCodec232"]:c22(),["SharedCodec233"]:c23(),["SharedCodec3"]:c24(),["SharedCodec314"]:c25(),["SharedCodec315"]:c26(),["SharedCodec348"]:c27(),["SharedCodec349"]:c28(),["SharedCodec350"]:c29(),["SharedCodec351"]:c30(),["SharedCodec352"]:c31(),["SharedCodec353"]:c32(),["SharedCodec363"]:c33(),["SharedCodec364"]:c34(),["SubscriptionPlanChangeLineItemRequest"]:c35(),["ThemeConfigRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionSubscriptionPlan(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
