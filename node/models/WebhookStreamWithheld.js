import { d943 as c0, d2599 as c1, d2610 as c2 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2610 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2610;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec291"]:c0(),["SharedCodec676"]:c1(),["WebhookStreamWithheld"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhookStreamWithheld(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
