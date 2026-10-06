import { d1064 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d957 as c6, d958 as c7, d1060 as c8, d1062 as c9, d1063 as c10, d1061 as c11 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d1064 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1064;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook290918a8af6ePayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec296"]:c6(),["SharedCodec297"]:c7(),["SharedCodec323"]:c8(),["SharedCodec324"]:c9(),["Webhook_order_fulfillment_updated_installed_merchants"]:c10(),["Webhook_order_fulfillment_updated_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook290918a8af6ePayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
