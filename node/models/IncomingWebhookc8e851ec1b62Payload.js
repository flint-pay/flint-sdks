import { d1421 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d916 as c5, d936 as c6, d937 as c7, d1039 as c8, d1041 as c9, d1420 as c10, d1419 as c11 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1421 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1421;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookc8e851ec1b62Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec289"]:c6(),["SharedCodec290"]:c7(),["SharedCodec316"]:c8(),["SharedCodec317"]:c9(),["Webhook_order_fulfillment_completed_installed_merchants"]:c10(),["Webhook_order_fulfillment_completed_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookc8e851ec1b62Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
