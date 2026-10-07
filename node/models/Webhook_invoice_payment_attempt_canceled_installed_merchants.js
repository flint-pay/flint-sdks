import { d944 as c0, d938 as c1, d943 as c2, d995 as c3, d996 as c4 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d996 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d996;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec289"]:c1(),["SharedCodec291"]:c2(),["SharedCodec313"]:c3(),["Webhook_invoice_payment_attempt_canceled_installed_merchants"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_payment_attempt_canceled_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
