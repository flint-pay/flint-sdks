import { d7907 as c0 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9888 as c1 } from '../descriptors/data/459.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9892 as c2, d9895 as c5, d9899 as c10, d9900 as c11, d9907 as c17, d9908 as c18, d9909 as c19 } from '../descriptors/data/460.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1437 as c3 } from '../descriptors/data/71.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9981 as c4, d9982 as c6, d9983 as c9, d9984 as c13, d9985 as c14, d9986 as c15, d9987 as c16, d9988 as c38, d9989 as c39 } from '../descriptors/data/464.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8249 as c7, d8248 as c8 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9016 as c12 } from '../descriptors/data/409.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9910 as c20, d9911 as c21, d9912 as c22, d9913 as c23, d9914 as c24, d9915 as c25, d9916 as c26, d9917 as c27, d9918 as c28, d9919 as c29, d9920 as c30, d9921 as c31, d9922 as c32, d9923 as c33, d9924 as c34, d9925 as c35, d9926 as c36, d9927 as c37 } from '../descriptors/data/461.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1437 as d1437 } from '../descriptors/data/71.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1437;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequest"]:c3(),["PaymentSourceCredential"]:c4(),["PaymentSourceCredentialStripePaymentMethod"]:c5(),["PaymentSplitRequest"]:c6(),["PlatformFeeMoney"]:c7(),["PlatformFeeRequest"]:c8(),["ReaderPaymentSourceTip"]:c9(),["SharedCodec1925"]:c10(),["SharedCodec1926"]:c11(),["SharedCodec216"]:c12(),["SharedCodec2242"]:c13(),["SharedCodec2243"]:c14(),["SharedCodec2244"]:c15(),["SharedCodec2245"]:c16(),["SharedCodec2264"]:c17(),["SharedCodec2265"]:c18(),["SharedCodec2266"]:c19(),["SharedCodec2267"]:c20(),["SharedCodec2268"]:c21(),["SharedCodec2269"]:c22(),["SharedCodec2270"]:c23(),["SharedCodec2271"]:c24(),["SharedCodec2272"]:c25(),["SharedCodec2273"]:c26(),["SharedCodec2274"]:c27(),["SharedCodec2275"]:c28(),["SharedCodec2276"]:c29(),["SharedCodec2277"]:c30(),["SharedCodec2278"]:c31(),["SharedCodec2279"]:c32(),["SharedCodec2280"]:c33(),["SharedCodec2281"]:c34(),["SharedCodec2282"]:c35(),["SharedCodec2283"]:c36(),["SharedCodec2284"]:c37(),["SharedCodec332"]:c38(),["SharedCodec334"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
