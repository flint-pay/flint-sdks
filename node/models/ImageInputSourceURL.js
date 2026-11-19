import { d8046 as c0 } from '../descriptors/data/353.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8046 as d8046 } from '../descriptors/data/353.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8046;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputSourceURL"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeImageInputSourceURL(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
