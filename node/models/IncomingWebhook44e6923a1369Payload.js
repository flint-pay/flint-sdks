import { d1140 as c0, d936 as c1, d526 as c2, d935 as c3, d2583 as c4 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1140 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1140;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook44e6923a1369Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec199"]:c2(),["SharedCodec286"]:c3(),["Webhook_payout_destination_updated_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook44e6923a1369Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
