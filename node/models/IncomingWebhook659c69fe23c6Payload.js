import { d1176 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d916 as c5, d1172 as c6, d1174 as c7, d1175 as c8, d1173 as c9 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1176 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1176;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook659c69fe23c6Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec341"]:c6(),["SharedCodec342"]:c7(),["Webhook_payment_method_failed_installed_merchants"]:c8(),["Webhook_payment_method_failed_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook659c69fe23c6Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
