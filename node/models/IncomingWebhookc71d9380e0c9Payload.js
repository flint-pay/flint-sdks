import { d1406 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d916 as c5, d975 as c6, d977 as c7, d1405 as c8, d1404 as c9 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1406 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1406;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookc71d9380e0c9Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec280"]:c5(),["SharedCodec304"]:c6(),["SharedCodec305"]:c7(),["Webhook_invoice_partially_paid_installed_merchants"]:c8(),["Webhook_invoice_partially_paid_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookc71d9380e0c9Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
