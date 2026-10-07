import { d936 as c0, d526 as c1, d935 as c2, d1499 as c3, d1500 as c4 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1500 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1500;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec286"]:c2(),["SharedCodec402"]:c3(),["Webhook_checkout_session_expired_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_checkout_session_expired_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
