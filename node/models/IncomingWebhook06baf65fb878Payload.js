import { d962 as c0, d936 as c1, d944 as c2, d526 as c3, d935 as c4, d943 as c5, d958 as c6, d957 as c7, d960 as c8, d961 as c9, d959 as c10 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d962 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d962;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook06baf65fb878Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec291"]:c5(),["SharedCodec296"]:c6(),["SharedCodec297"]:c7(),["SharedCodec298"]:c8(),["Webhook_payment_intent_fulfillment_hold_updated_installed_merchants"]:c9(),["Webhook_payment_intent_fulfillment_hold_updated_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook06baf65fb878Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
