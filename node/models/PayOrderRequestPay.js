import { d7907 as c0 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9888 as c1 } from '../descriptors/data/459.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1439 as c2 } from '../descriptors/data/71.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9981 as c3, d9982 as c4, d9983 as c7, d9984 as c11, d9985 as c12, d9986 as c13, d9987 as c14, d9988 as c24, d9989 as c25 } from '../descriptors/data/464.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8249 as c5, d8248 as c6 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9899 as c8, d9900 as c9, d9908 as c15, d9909 as c16 } from '../descriptors/data/460.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9016 as c10 } from '../descriptors/data/409.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9910 as c17, d9911 as c18, d9912 as c19, d9913 as c20, d9914 as c21, d9915 as c22, d9916 as c23 } from '../descriptors/data/461.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1439 as d1439 } from '../descriptors/data/71.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1439;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["PayOrderRequestPay"]:c2(),["PaymentSourceCredential"]:c3(),["PaymentSplitRequest"]:c4(),["PlatformFeeMoney"]:c5(),["PlatformFeeRequest"]:c6(),["ReaderPaymentSourceTip"]:c7(),["SharedCodec1925"]:c8(),["SharedCodec1926"]:c9(),["SharedCodec216"]:c10(),["SharedCodec2242"]:c11(),["SharedCodec2243"]:c12(),["SharedCodec2244"]:c13(),["SharedCodec2245"]:c14(),["SharedCodec2265"]:c15(),["SharedCodec2266"]:c16(),["SharedCodec2267"]:c17(),["SharedCodec2268"]:c18(),["SharedCodec2269"]:c19(),["SharedCodec2270"]:c20(),["SharedCodec2271"]:c21(),["SharedCodec2272"]:c22(),["SharedCodec2273"]:c23(),["SharedCodec332"]:c24(),["SharedCodec334"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
