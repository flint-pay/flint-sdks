import { d1139 as c0, d936 as c1, d944 as c2, d526 as c3, d935 as c4, d943 as c5, d1135 as c6, d1134 as c7, d1137 as c8, d1138 as c9, d1136 as c10 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1139 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1139;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook44764240a51fPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec291"]:c5(),["SharedCodec338"]:c6(),["SharedCodec339"]:c7(),["SharedCodec340"]:c8(),["Webhook_subscription_cancellation_scheduled_installed_merchants"]:c9(),["Webhook_subscription_cancellation_scheduled_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook44764240a51fPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
