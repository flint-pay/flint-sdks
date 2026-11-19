import { d10899 as c0 } from '../descriptors/data/519.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10899 as d10899 } from '../descriptors/data/519.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10899;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionIntervalOptionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionIntervalOptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
