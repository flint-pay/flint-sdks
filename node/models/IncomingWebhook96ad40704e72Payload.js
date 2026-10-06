import { d1293 as c0, d916 as c1, d924 as c2, d520 as c3, d915 as c4, d923 as c5, d955 as c6, d1292 as c7, d1291 as c8 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1293 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1293;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook96ad40704e72Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec281"]:c4(),["SharedCodec286"]:c5(),["SharedCodec302"]:c6(),["Webhook_return_resolution_created_installed_merchants"]:c7(),["Webhook_return_resolution_created_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook96ad40704e72Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
