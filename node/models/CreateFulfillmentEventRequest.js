import { d285 as c0 } from '../descriptors/data/14.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d285 as d285 } from '../descriptors/data/14.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d285;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateFulfillmentEventRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentEventRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
