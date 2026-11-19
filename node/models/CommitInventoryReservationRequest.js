import { d221 as c0 } from '../descriptors/data/10.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9197 as c1, d9198 as c2 } from '../descriptors/data/418.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d221 as d221 } from '../descriptors/data/10.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d221;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CommitInventoryReservationRequest"]:c0(),["SharedCodec326"]:c1(),["SharedCodec327"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCommitInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
