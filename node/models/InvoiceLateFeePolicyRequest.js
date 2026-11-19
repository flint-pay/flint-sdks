import { d9259 as c0 } from '../descriptors/data/421.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c1 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8313 as c2, d8314 as c3, d8315 as c4, d8316 as c5 } from '../descriptors/data/368.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9259 as d9259 } from '../descriptors/data/421.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9259;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicyRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec119"]:c2(),["SharedCodec120"]:c3(),["SharedCodec121"]:c4(),["SharedCodec122"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceLateFeePolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
