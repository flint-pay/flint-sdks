import { d925 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d916 as c5, d921 as c6, d920 as c7, d923 as c8, d924 as c9, d922 as c10 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d925 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d925;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook05810405f7d2Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec281"]:c6(),["SharedCodec282"]:c7(),["SharedCodec283"]:c8(),["Webhook_order_fulfillment_event_created_installed_merchants"]:c9(),["Webhook_order_fulfillment_event_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook05810405f7d2Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
