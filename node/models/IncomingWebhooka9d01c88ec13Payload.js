import { d1344 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d916 as c5, d936 as c6, d937 as c7, d1039 as c8, d1041 as c9, d1343 as c10, d1342 as c11 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1344 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1344;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhooka9d01c88ec13Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec289"]:c6(),["SharedCodec290"]:c7(),["SharedCodec316"]:c8(),["SharedCodec317"]:c9(),["Webhook_order_fulfillment_created_installed_merchants"]:c10(),["Webhook_order_fulfillment_created_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhooka9d01c88ec13Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
