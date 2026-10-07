import { d1311 as c0, d936 as c1, d944 as c2, d526 as c3, d935 as c4, d943 as c5, d1307 as c6, d1309 as c7, d1310 as c8, d1308 as c9 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1311 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1311;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook9123c6d282f9Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec291"]:c5(),["SharedCodec367"]:c6(),["SharedCodec368"]:c7(),["Webhook_subscription_renewal_upcoming_installed_merchants"]:c8(),["Webhook_subscription_renewal_upcoming_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook9123c6d282f9Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
