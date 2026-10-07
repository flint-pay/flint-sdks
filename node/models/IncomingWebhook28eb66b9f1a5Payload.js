import { d1065 as c0, d936 as c1, d944 as c2, d526 as c3, d935 as c4, d943 as c5, d1061 as c6, d1063 as c7, d1064 as c8, d1062 as c9 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1065 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1065;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook28eb66b9f1a5Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec291"]:c5(),["SharedCodec325"]:c6(),["SharedCodec326"]:c7(),["Webhook_refund_updated_installed_merchants"]:c8(),["Webhook_refund_updated_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook28eb66b9f1a5Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
