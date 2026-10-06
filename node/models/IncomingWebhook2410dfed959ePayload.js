import { d1029 as c0, d930 as c1, d525 as c2, d929 as c3, d2546 as c4 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d1029 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1029;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook2410dfed959ePayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec199"]:c2(),["SharedCodec282"]:c3(),["Webhook_inventory_receipt_created_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook2410dfed959ePayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
