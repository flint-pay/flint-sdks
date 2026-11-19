import { d8567 as c0 } from '../descriptors/data/382.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8567 as d8567 } from '../descriptors/data/382.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8567;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryBlackoutIntervalRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryBlackoutIntervalRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
