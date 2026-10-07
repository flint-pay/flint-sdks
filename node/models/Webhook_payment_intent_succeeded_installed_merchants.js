import { d944 as c0, d939 as c1, d938 as c2, d942 as c3, d943 as c4, d1245 as c5 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1245 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1245;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec288"]:c1(),["SharedCodec289"]:c2(),["SharedCodec290"]:c3(),["SharedCodec291"]:c4(),["Webhook_payment_intent_succeeded_installed_merchants"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_payment_intent_succeeded_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
