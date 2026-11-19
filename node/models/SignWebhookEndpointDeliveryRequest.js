import { d7511 as c0 } from '../descriptors/data/315.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7511 as d7511 } from '../descriptors/data/315.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7511;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SignWebhookEndpointDeliveryRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSignWebhookEndpointDeliveryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
