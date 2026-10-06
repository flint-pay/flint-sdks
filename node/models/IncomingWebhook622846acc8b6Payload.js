import { d1185 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d957 as c6, d958 as c7, d962 as c8, d1181 as c9, d1183 as c10, d1184 as c11, d1182 as c12 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d1185 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1185;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook622846acc8b6Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec296"]:c6(),["SharedCodec297"]:c7(),["SharedCodec301"]:c8(),["SharedCodec345"]:c9(),["SharedCodec346"]:c10(),["Webhook_order_fulfillment_shipment_created_installed_merchants"]:c11(),["Webhook_order_fulfillment_shipment_created_merchant"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook622846acc8b6Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
