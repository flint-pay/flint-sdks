import { d936 as c0, d526 as c1, d935 as c2, d963 as c3, d964 as c4, d1316 as c5, d1315 as c6, d1317 as c7 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1317 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1317;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec286"]:c2(),["SharedCodec300"]:c3(),["SharedCodec301"]:c4(),["SharedCodec369"]:c5(),["SharedCodec370"]:c6(),["Webhook_order_fulfillment_status_changed_merchant"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_status_changed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
