import { d944 as c0, d943 as c1, d1557 as c2, d1552 as c3, d1554 as c4, d1553 as c5, d1555 as c6, d1556 as c7, d1558 as c8 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1558 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1558;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec291"]:c1(),["SharedCodec415"]:c2(),["SharedCodec416"]:c3(),["SharedCodec417"]:c4(),["SharedCodec418"]:c5(),["SharedCodec419"]:c6(),["SharedCodec420"]:c7(),["Webhook_report_succeeded_installed_merchants"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_report_succeeded_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
