import { d952 as c0, d936 as c1, d944 as c2, d526 as c3, d935 as c4, d943 as c5, d948 as c6, d947 as c7, d950 as c8, d951 as c9, d949 as c10 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d952 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d952;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook05810405f7d2Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec291"]:c5(),["SharedCodec292"]:c6(),["SharedCodec293"]:c7(),["SharedCodec294"]:c8(),["Webhook_order_fulfillment_event_created_installed_merchants"]:c9(),["Webhook_order_fulfillment_event_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook05810405f7d2Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
