import { d936 as c0, d2146 as c1, d526 as c2, d935 as c3, d1552 as c4, d1554 as c5, d1553 as c6, d1555 as c7, d1556 as c8, d1578 as c9 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1578 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1578;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["Report"]:c1(),["SharedCodec199"]:c2(),["SharedCodec286"]:c3(),["SharedCodec416"]:c4(),["SharedCodec417"]:c5(),["SharedCodec418"]:c6(),["SharedCodec419"]:c7(),["SharedCodec420"]:c8(),["Webhook_report_failed_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_report_failed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
