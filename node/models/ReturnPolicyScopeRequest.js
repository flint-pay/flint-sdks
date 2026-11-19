import { d10555 as c0 } from '../descriptors/data/500.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10575 as c1, d10576 as c2, d10577 as c3, d10578 as c4 } from '../descriptors/data/501.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10555 as d10555 } from '../descriptors/data/500.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10555;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnPolicyScopeRequest"]:c0(),["SharedCodec2738"]:c1(),["SharedCodec2739"]:c2(),["SharedCodec2740"]:c3(),["SharedCodec2741"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyScopeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
