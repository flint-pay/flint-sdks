import { d1254 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d1178 as c6, d1253 as c7, d1252 as c8 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d1254 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1254;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook78590778ef68Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec344"]:c6(),["Webhook_customer_updated_installed_merchants"]:c7(),["Webhook_customer_updated_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook78590778ef68Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
