import { d1545 as c0, d936 as c1, d944 as c2, d526 as c3, d935 as c4, d940 as c5, d939 as c6, d938 as c7, d942 as c8, d943 as c9, d1544 as c10, d1543 as c11 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1545 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1545;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookefe153a00c42Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec287"]:c5(),["SharedCodec288"]:c6(),["SharedCodec289"]:c7(),["SharedCodec290"]:c8(),["SharedCodec291"]:c9(),["Webhook_payment_intent_canceled_installed_merchants"]:c10(),["Webhook_payment_intent_canceled_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookefe153a00c42Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
