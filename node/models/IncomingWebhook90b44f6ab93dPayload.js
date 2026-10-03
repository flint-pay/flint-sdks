import { d1271 as c0, d911 as c1, d517 as c2, d910 as c3, d2516 as c4 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1271 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1271;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook90b44f6ab93dPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec197"]:c2(),["SharedCodec275"]:c3(),["Webhook_inventory_transfer_closed_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook90b44f6ab93dPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
