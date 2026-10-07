import { d1439 as c0, d936 as c1, d944 as c2, d526 as c3, d935 as c4, d938 as c5, d943 as c6, d1435 as c7, d1437 as c8, d1438 as c9, d1436 as c10 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1439 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1439;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookc04d32fcb4e2Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec289"]:c5(),["SharedCodec291"]:c6(),["SharedCodec398"]:c7(),["SharedCodec399"]:c8(),["Webhook_invoice_collection_block_resolved_installed_merchants"]:c9(),["Webhook_invoice_collection_block_resolved_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookc04d32fcb4e2Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
