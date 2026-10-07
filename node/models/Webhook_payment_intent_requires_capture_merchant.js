import { d936 as c0, d526 as c1, d935 as c2, d940 as c3, d939 as c4, d938 as c5, d1118 as c6 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1118 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1118;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec286"]:c2(),["SharedCodec287"]:c3(),["SharedCodec288"]:c4(),["SharedCodec289"]:c5(),["Webhook_payment_intent_requires_capture_merchant"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_payment_intent_requires_capture_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
