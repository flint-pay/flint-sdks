import { d1890 as c0 } from '../descriptors/data/94.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1890 as d1890 } from '../descriptors/data/94.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1890;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RotateWebhookSecretRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRotateWebhookSecretRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
