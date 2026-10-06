import { d1262 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d932 as c5, d937 as c6, d1258 as c7, d1260 as c8, d1261 as c9, d1259 as c10 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d1262 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1262;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook7bde345d1a10Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec285"]:c5(),["SharedCodec287"]:c6(),["SharedCodec357"]:c7(),["SharedCodec358"]:c8(),["Webhook_invoice_payment_attempt_expired_installed_merchants"]:c9(),["Webhook_invoice_payment_attempt_expired_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook7bde345d1a10Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
