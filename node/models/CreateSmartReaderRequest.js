import { d409 as c0 } from '../descriptors/data/25.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8035 as c1 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d409 as d409 } from '../descriptors/data/25.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d409;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSmartReaderRequest"]:c0(),["MetadataRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSmartReaderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
