import { d1380 as c0, d936 as c1, d944 as c2, d526 as c3, d935 as c4, d943 as c5, d963 as c6, d964 as c7, d1066 as c8, d1068 as c9, d1379 as c10, d1378 as c11 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1380 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1380;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhooka9d01c88ec13Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec291"]:c5(),["SharedCodec300"]:c6(),["SharedCodec301"]:c7(),["SharedCodec327"]:c8(),["SharedCodec328"]:c9(),["Webhook_order_fulfillment_created_installed_merchants"]:c10(),["Webhook_order_fulfillment_created_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhooka9d01c88ec13Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
