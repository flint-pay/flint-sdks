import { d10543 as c0, d10546 as c1, d10547 as c2, d10548 as c3 } from '../descriptors/data/499.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9133 as c4 } from '../descriptors/data/414.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10543 as d10543 } from '../descriptors/data/499.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10543;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnSourceSystemRequest"]:c0(),["SharedCodec2673"]:c1(),["SharedCodec2674"]:c2(),["SharedCodec2675"]:c3(),["SharedCodec451"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnSourceSystemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
