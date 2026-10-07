import { d1081 as c0, d936 as c1, d526 as c2, d935 as c3, d2550 as c4 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1081 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1081;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook31bad37575e1Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec199"]:c2(),["SharedCodec286"]:c3(),["Webhook_inventory_action_required_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook31bad37575e1Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
