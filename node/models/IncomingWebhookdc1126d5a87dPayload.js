import { d1496 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d1492 as c6, d1494 as c7, d1495 as c8, d1493 as c9 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d1496 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1496;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookdc1126d5a87dPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec397"]:c6(),["SharedCodec398"]:c7(),["Webhook_checkout_session_expired_installed_merchants"]:c8(),["Webhook_checkout_session_expired_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookdc1126d5a87dPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
