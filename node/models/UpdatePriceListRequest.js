import { d8036 as c0 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8132 as c1 } from '../descriptors/data/358.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10317 as c2 } from '../descriptors/data/485.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7774 as c3 } from '../descriptors/data/329.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7774 as d7774 } from '../descriptors/data/329.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7774;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3065"]:c0(),["SharedCodec3068"]:c1(),["SharedCodec3153"]:c2(),["UpdatePriceListRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePriceListRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
