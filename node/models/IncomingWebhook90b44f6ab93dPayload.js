import { d1303 as c0, d936 as c1, d526 as c2, d935 as c3, d2562 as c4 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1303 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1303;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook90b44f6ab93dPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec199"]:c2(),["SharedCodec286"]:c3(),["Webhook_inventory_transfer_closed_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook90b44f6ab93dPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
