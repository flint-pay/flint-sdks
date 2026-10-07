import { d1347 as c0, d936 as c1, d944 as c2, d526 as c3, d935 as c4, d943 as c5, d1343 as c6, d1345 as c7, d1346 as c8, d1344 as c9 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1347 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1347;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook993ba0d279b8Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec291"]:c5(),["SharedCodec379"]:c6(),["SharedCodec380"]:c7(),["Webhook_order_inventory_exception_created_installed_merchants"]:c8(),["Webhook_order_inventory_exception_created_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook993ba0d279b8Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
