import { d8135 as c0, d8133 as c22, d8134 as c23 } from '../descriptors/data/358.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8250 as c1, d8251 as c6, d8244 as c8, d8253 as c9, d8254 as c10, d8255 as c11, d8256 as c16, d8249 as c17, d8248 as c18, d8238 as c19, d8239 as c20, d8240 as c21, d8241 as c24, d8242 as c25, d8243 as c26 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8064 as c2, d8065 as c3, d8066 as c4, d8067 as c5, d8068 as c7, d8071 as c12 } from '../descriptors/data/354.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d249 as c13 } from '../descriptors/data/11.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8035 as c14 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c15 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8088 as c27, d8089 as c28, d8090 as c29 } from '../descriptors/data/355.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8096 as c30, d8097 as c31 } from '../descriptors/data/356.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8114 as c32 } from '../descriptors/data/357.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d249 as d249 } from '../descriptors/data/11.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d249;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutQuickPayItemRequest"]:c7(),["CheckoutRedirectsRequest"]:c8(),["CheckoutTaxCalculationRequest"]:c9(),["CheckoutTaxConfigRequest"]:c10(),["CheckoutTipConfigRequest"]:c11(),["CreateCheckoutSessionDiscount"]:c12(),["CreateCheckoutSessionQuickPay"]:c13(),["MetadataRequest"]:c14(),["MoneyValue"]:c15(),["OrderLineItemTaxRequest"]:c16(),["PlatformFeeMoney"]:c17(),["PlatformFeeRequest"]:c18(),["PromotionRefInputPromotionCode"]:c19(),["PromotionRefInputPromotionID"]:c20(),["PromotionRefRequest"]:c21(),["SharedCodec2"]:c22(),["SharedCodec3"]:c23(),["SharedCodec348"]:c24(),["SharedCodec349"]:c25(),["SharedCodec350"]:c26(),["SharedCodec351"]:c27(),["SharedCodec352"]:c28(),["SharedCodec353"]:c29(),["SharedCodec358"]:c30(),["SharedCodec359"]:c31(),["ThemeConfigRequest"]:c32()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionQuickPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
