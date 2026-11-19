import { d8135 as c0, d8133 as c14, d8134 as c15 } from '../descriptors/data/358.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8250 as c1, d8251 as c6, d8244 as c7, d8255 as c8, d8249 as c12, d8248 as c13, d8241 as c16, d8242 as c17, d8243 as c18 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8064 as c2, d8065 as c3, d8066 as c4, d8067 as c5 } from '../descriptors/data/354.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d247 as c9 } from '../descriptors/data/11.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8035 as c10 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c11 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8088 as c19, d8089 as c20, d8090 as c21 } from '../descriptors/data/355.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8093 as c22, d8095 as c23 } from '../descriptors/data/356.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8114 as c24 } from '../descriptors/data/357.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d247 as d247 } from '../descriptors/data/11.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d247;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutRedirectsRequest"]:c7(),["CheckoutTipConfigRequest"]:c8(),["CreateCheckoutSessionOrder"]:c9(),["MetadataRequest"]:c10(),["MoneyValue"]:c11(),["PlatformFeeMoney"]:c12(),["PlatformFeeRequest"]:c13(),["SharedCodec2"]:c14(),["SharedCodec3"]:c15(),["SharedCodec348"]:c16(),["SharedCodec349"]:c17(),["SharedCodec350"]:c18(),["SharedCodec351"]:c19(),["SharedCodec352"]:c20(),["SharedCodec353"]:c21(),["SharedCodec356"]:c22(),["SharedCodec357"]:c23(),["ThemeConfigRequest"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionOrder(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
