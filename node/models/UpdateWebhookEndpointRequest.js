import { d8788 as c0, d8789 as c5 } from '../descriptors/data/394.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d11076 as c1, d11077 as c2, d11078 as c3 } from '../descriptors/data/529.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7809 as c4 } from '../descriptors/data/332.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7809 as d7809 } from '../descriptors/data/332.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7809;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3082"]:c0(),["SharedCodec3203"]:c1(),["SharedCodec3204"]:c2(),["SharedCodec3205"]:c3(),["UpdateWebhookEndpointRequest"]:c4(),["WebhookSigningMethod"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
