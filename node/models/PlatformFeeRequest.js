import { d8249 as c0, d8248 as c1 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8248 as d8248 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8248;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PlatformFeeMoney"]:c0(),["PlatformFeeRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePlatformFeeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
