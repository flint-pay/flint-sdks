import { d1738 as c0 } from '../descriptors/data/86.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9195 as c1, d9196 as c2 } from '../descriptors/data/418.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1738 as d1738 } from '../descriptors/data/86.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1738;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReleaseInventoryReservationRequest"]:c0(),["SharedCodec2572"]:c1(),["SharedCodec2573"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReleaseInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
