import { d1559 as c0, d936 as c1, d944 as c2, d2146 as c3, d526 as c4, d935 as c5, d943 as c6, d1557 as c7, d1552 as c8, d1554 as c9, d1553 as c10, d1555 as c11, d1556 as c12, d1558 as c13, d1551 as c14 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1559 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1559;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookf2be10231857Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["Report"]:c3(),["SharedCodec199"]:c4(),["SharedCodec286"]:c5(),["SharedCodec291"]:c6(),["SharedCodec415"]:c7(),["SharedCodec416"]:c8(),["SharedCodec417"]:c9(),["SharedCodec418"]:c10(),["SharedCodec419"]:c11(),["SharedCodec420"]:c12(),["Webhook_report_succeeded_installed_merchants"]:c13(),["Webhook_report_succeeded_merchant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookf2be10231857Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
