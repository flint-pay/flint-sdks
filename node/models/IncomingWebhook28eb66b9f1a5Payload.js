import { d1059 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d1055 as c6, d1057 as c7, d1058 as c8, d1056 as c9 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d1059 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1059;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook28eb66b9f1a5Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec321"]:c6(),["SharedCodec322"]:c7(),["Webhook_refund_updated_installed_merchants"]:c8(),["Webhook_refund_updated_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook28eb66b9f1a5Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
