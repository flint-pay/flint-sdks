import { d1507 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d932 as c5, d937 as c6, d1503 as c7, d1505 as c8, d1506 as c9, d1504 as c10 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d1507 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1507;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookde0dbbc12385Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec285"]:c5(),["SharedCodec287"]:c6(),["SharedCodec399"]:c7(),["SharedCodec400"]:c8(),["Webhook_invoice_reminder_due_installed_merchants"]:c9(),["Webhook_invoice_reminder_due_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookde0dbbc12385Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
