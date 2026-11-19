import { d7907 as c0 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8256 as c1, d8249 as c3 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10168 as c2 } from '../descriptors/data/475.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10195 as c4, d10200 as c5, d10201 as c6 } from '../descriptors/data/477.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10203 as c7, d10204 as c8, d10205 as c9, d10206 as c10, d10207 as c11, d10208 as c12, d10209 as c13, d10210 as c14, d10211 as c15 } from '../descriptors/data/478.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10168 as d10168 } from '../descriptors/data/475.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10168;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemPatchRequest"]:c2(),["PlatformFeeMoney"]:c3(),["SharedCodec2141"]:c4(),["SharedCodec2146"]:c5(),["SharedCodec2147"]:c6(),["SharedCodec2149"]:c7(),["SharedCodec2165"]:c8(),["SharedCodec2166"]:c9(),["SharedCodec2167"]:c10(),["SharedCodec2168"]:c11(),["SharedCodec2169"]:c12(),["SharedCodec2170"]:c13(),["SharedCodec2171"]:c14(),["SharedCodec2172"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
