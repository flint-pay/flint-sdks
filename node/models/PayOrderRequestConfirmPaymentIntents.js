import { d7907 as c0 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9888 as c1 } from '../descriptors/data/459.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9892 as c2, d9899 as c6, d9900 as c7, d9908 as c12, d9909 as c13 } from '../descriptors/data/460.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1438 as c3 } from '../descriptors/data/71.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9981 as c4, d9983 as c5, d9984 as c8, d9985 as c9, d9986 as c10, d9987 as c11, d9988 as c21, d9989 as c22 } from '../descriptors/data/464.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9910 as c14, d9918 as c15, d9919 as c16, d9920 as c17, d9921 as c18, d9922 as c19, d9923 as c20 } from '../descriptors/data/461.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1438 as d1438 } from '../descriptors/data/71.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1438;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequestConfirmPaymentIntents"]:c3(),["PaymentSourceCredential"]:c4(),["ReaderPaymentSourceTip"]:c5(),["SharedCodec1925"]:c6(),["SharedCodec1926"]:c7(),["SharedCodec2242"]:c8(),["SharedCodec2243"]:c9(),["SharedCodec2244"]:c10(),["SharedCodec2245"]:c11(),["SharedCodec2265"]:c12(),["SharedCodec2266"]:c13(),["SharedCodec2267"]:c14(),["SharedCodec2275"]:c15(),["SharedCodec2276"]:c16(),["SharedCodec2277"]:c17(),["SharedCodec2278"]:c18(),["SharedCodec2279"]:c19(),["SharedCodec2280"]:c20(),["SharedCodec332"]:c21(),["SharedCodec334"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestConfirmPaymentIntents(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
