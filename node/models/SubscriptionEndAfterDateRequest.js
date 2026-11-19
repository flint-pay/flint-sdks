import { d7576 as c0 } from '../descriptors/data/317.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7576 as d7576 } from '../descriptors/data/317.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7576;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionEndAfterDateRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionEndAfterDateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
