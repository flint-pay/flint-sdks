import { d7743 as c0 } from '../descriptors/data/326.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7743 as d7743 } from '../descriptors/data/326.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7743;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateGiftCardRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
