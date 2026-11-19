import { d1737 as c0 } from '../descriptors/data/86.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1737 as d1737 } from '../descriptors/data/86.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1737;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReleaseFulfillmentHoldRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReleaseFulfillmentHoldRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
