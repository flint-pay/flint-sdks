import { d1495 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d895 as c5, d900 as c6, d1491 as c7, d1493 as c8, d1494 as c9, d1492 as c10 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1495 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1495;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookde0dbbc12385Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec249"]:c5(),["SharedCodec251"]:c6(),["SharedCodec373"]:c7(),["SharedCodec374"]:c8(),["Webhook_invoice_reminder_due_installed_merchants"]:c9(),["Webhook_invoice_reminder_due_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookde0dbbc12385Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
