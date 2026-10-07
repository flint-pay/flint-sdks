import { d1444 as c0, d936 as c1, d944 as c2, d526 as c3, d935 as c4, d943 as c5, d1002 as c6, d1004 as c7, d1443 as c8, d1442 as c9 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1444 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1444;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookc71d9380e0c9Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec291"]:c5(),["SharedCodec315"]:c6(),["SharedCodec316"]:c7(),["Webhook_invoice_partially_paid_installed_merchants"]:c8(),["Webhook_invoice_partially_paid_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookc71d9380e0c9Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
