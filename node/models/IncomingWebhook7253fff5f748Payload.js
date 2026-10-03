import { d1212 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d913 as c5, d912 as c6, d911 as c7, d915 as c8, d916 as c9, d1211 as c10, d1210 as c11 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1212 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1212;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook7253fff5f748Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec276"]:c5(),["SharedCodec277"]:c6(),["SharedCodec278"]:c7(),["SharedCodec279"]:c8(),["SharedCodec280"]:c9(),["Webhook_payment_intent_succeeded_installed_merchants"]:c10(),["Webhook_payment_intent_succeeded_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook7253fff5f748Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
