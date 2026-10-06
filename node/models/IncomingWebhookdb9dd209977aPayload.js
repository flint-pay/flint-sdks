import { d1466 as c0, d916 as c1, d520 as c2, d915 as c3, d2530 as c4 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1466 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1466;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookdb9dd209977aPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec199"]:c2(),["SharedCodec281"]:c3(),["Webhook_inventory_transfer_lost_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookdb9dd209977aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
