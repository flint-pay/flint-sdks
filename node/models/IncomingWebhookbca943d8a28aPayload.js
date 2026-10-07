import { d1429 as c0, d936 as c1, d944 as c2, d526 as c3, d935 as c4, d940 as c5, d939 as c6, d938 as c7, d942 as c8, d943 as c9, d1428 as c10, d1427 as c11 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1429 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1429;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookbca943d8a28aPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec287"]:c5(),["SharedCodec288"]:c6(),["SharedCodec289"]:c7(),["SharedCodec290"]:c8(),["SharedCodec291"]:c9(),["Webhook_payment_intent_payment_failed_installed_merchants"]:c10(),["Webhook_payment_intent_payment_failed_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookbca943d8a28aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
