import { d10092 as c0 } from '../descriptors/data/470.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c1 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9016 as c2 } from '../descriptors/data/409.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10486 as c3 } from '../descriptors/data/495.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10092 as d10092 } from '../descriptors/data/470.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10092;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CapturePaymentSplitRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec216"]:c2(),["SplitReversalRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCapturePaymentSplitRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
