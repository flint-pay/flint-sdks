import { d9872 as c0 } from '../descriptors/data/458.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9872 as d9872 } from '../descriptors/data/458.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9872;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderEditRemovalRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderEditRemovalRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
