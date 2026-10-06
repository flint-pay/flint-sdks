import { d1481 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d972 as c6, d974 as c7, d1480 as c8, d1479 as c9 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d1481 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1481;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookd7a01fed3e2fPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec304"]:c6(),["SharedCodec305"]:c7(),["Webhook_order_closed_installed_merchants"]:c8(),["Webhook_order_closed_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookd7a01fed3e2fPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
