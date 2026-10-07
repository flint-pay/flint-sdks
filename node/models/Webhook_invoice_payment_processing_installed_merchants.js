import { d944 as c0, d938 as c1, d943 as c2, d1531 as c3, d1532 as c4 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1532 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1532;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec289"]:c1(),["SharedCodec291"]:c2(),["SharedCodec412"]:c3(),["Webhook_invoice_payment_processing_installed_merchants"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_payment_processing_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
