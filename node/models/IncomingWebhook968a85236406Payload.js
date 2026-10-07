import { d1320 as c0, d936 as c1, d944 as c2, d526 as c3, d935 as c4, d943 as c5, d963 as c6, d964 as c7, d1316 as c8, d1315 as c9, d1318 as c10, d1319 as c11, d1317 as c12 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1320 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1320;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook968a85236406Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec291"]:c5(),["SharedCodec300"]:c6(),["SharedCodec301"]:c7(),["SharedCodec369"]:c8(),["SharedCodec370"]:c9(),["SharedCodec371"]:c10(),["Webhook_order_fulfillment_status_changed_installed_merchants"]:c11(),["Webhook_order_fulfillment_status_changed_merchant"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook968a85236406Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
