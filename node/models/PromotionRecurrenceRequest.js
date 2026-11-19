import { d10404 as c0 } from '../descriptors/data/490.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9662 as c1, d9663 as c2, d9664 as c3, d9665 as c4, d9666 as c5 } from '../descriptors/data/447.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10404 as d10404 } from '../descriptors/data/490.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10404;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrenceRequest"]:c0(),["SharedCodec2426"]:c1(),["SharedCodec2427"]:c2(),["SharedCodec2428"]:c3(),["SharedCodec2429"]:c4(),["SharedCodec2430"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrenceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
