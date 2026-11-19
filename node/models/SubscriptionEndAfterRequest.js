import { d9709 as c0 } from '../descriptors/data/449.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10955 as c1 } from '../descriptors/data/523.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7578 as c2 } from '../descriptors/data/317.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7578 as d7578 } from '../descriptors/data/317.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7578;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec169"]:c0(),["SharedCodec594"]:c1(),["SubscriptionEndAfterRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionEndAfterRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
