import { d936 as c0, d526 as c1, d935 as c2, d963 as c3, d964 as c4, d1066 as c5, d1457 as c6 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1457 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1457;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec286"]:c2(),["SharedCodec300"]:c3(),["SharedCodec301"]:c4(),["SharedCodec327"]:c5(),["Webhook_order_fulfillment_completed_merchant"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_completed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
