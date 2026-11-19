import { d355 as c0 } from '../descriptors/data/20.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8035 as c1 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c2 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10094 as c3, d10095 as c4 } from '../descriptors/data/470.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9982 as c5 } from '../descriptors/data/464.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8249 as c6, d8248 as c7 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9016 as c8 } from '../descriptors/data/409.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10135 as c9, d10136 as c10, d10137 as c11, d10138 as c12, d10139 as c13, d10140 as c14, d10141 as c15, d10142 as c16, d10143 as c17, d10144 as c18, d10145 as c19, d10146 as c20, d10147 as c21, d10148 as c22, d10149 as c23, d10150 as c24 } from '../descriptors/data/473.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d355 as d355 } from '../descriptors/data/20.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d355;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePaymentIntentRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["OrderPaymentSourceCardSelection"]:c3(),["OrderPaymentSourceSelection"]:c4(),["PaymentSplitRequest"]:c5(),["PlatformFeeMoney"]:c6(),["PlatformFeeRequest"]:c7(),["SharedCodec216"]:c8(),["SharedCodec513"]:c9(),["SharedCodec514"]:c10(),["SharedCodec515"]:c11(),["SharedCodec516"]:c12(),["SharedCodec517"]:c13(),["SharedCodec518"]:c14(),["SharedCodec519"]:c15(),["SharedCodec520"]:c16(),["SharedCodec521"]:c17(),["SharedCodec522"]:c18(),["SharedCodec523"]:c19(),["SharedCodec524"]:c20(),["SharedCodec525"]:c21(),["SharedCodec526"]:c22(),["SharedCodec527"]:c23(),["SharedCodec528"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
