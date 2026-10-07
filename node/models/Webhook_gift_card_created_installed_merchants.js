import { d944 as c0, d943 as c1, d1123 as c2, d41 as c3, d1168 as c4 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1168 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1168;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec291"]:c1(),["SharedCodec335"]:c2(),["SharedCodec6"]:c3(),["Webhook_gift_card_created_installed_merchants"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
