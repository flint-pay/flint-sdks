import { d1326 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d941 as c6, d957 as c7, d958 as c8, d961 as c9, d959 as c10, d960 as c11, d962 as c12, d1322 as c13, d1321 as c14, d1324 as c15, d1325 as c16, d1323 as c17 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d1326 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1326;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook96e4efc9dab0Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec289"]:c6(),["SharedCodec296"]:c7(),["SharedCodec297"]:c8(),["SharedCodec298"]:c9(),["SharedCodec299"]:c10(),["SharedCodec300"]:c11(),["SharedCodec301"]:c12(),["SharedCodec368"]:c13(),["SharedCodec369"]:c14(),["SharedCodec370"]:c15(),["Webhook_order_fulfillment_package_updated_installed_merchants"]:c16(),["Webhook_order_fulfillment_package_updated_merchant"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook96e4efc9dab0Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
