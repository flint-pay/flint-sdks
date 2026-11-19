import { d8037 as c0, d8038 as c1, d8036 as c2 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7740 as c3 } from '../descriptors/data/326.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7740 as d7740 } from '../descriptors/data/326.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7740;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3063"]:c0(),["SharedCodec3064"]:c1(),["SharedCodec3065"]:c2(),["UpdateDeviceRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeviceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
