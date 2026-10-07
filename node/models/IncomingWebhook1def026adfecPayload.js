import { d1022 as c0, d936 as c1, d944 as c2, d526 as c3, d935 as c4, d938 as c5, d943 as c6, d1018 as c7, d1020 as c8, d1021 as c9, d1019 as c10 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1022 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1022;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook1def026adfecPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec286"]:c4(),["SharedCodec289"]:c5(),["SharedCodec291"]:c6(),["SharedCodec320"]:c7(),["SharedCodec321"]:c8(),["Webhook_invoice_overdue_installed_merchants"]:c9(),["Webhook_invoice_overdue_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook1def026adfecPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
