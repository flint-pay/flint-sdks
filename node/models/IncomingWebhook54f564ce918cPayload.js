import { d1159 as c0, d936 as c1, d526 as c2, d935 as c3, d938 as c4, d1158 as c5, d2567 as c6 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1159 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1159;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook54f564ce918cPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec199"]:c2(),["SharedCodec286"]:c3(),["SharedCodec289"]:c4(),["SharedCodec344"]:c5(),["Webhook_merchant_billing_balance_updated_merchant"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook54f564ce918cPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
