import { d936 as c0, d526 as c1, d935 as c2, d1527 as c3, d1525 as c4, d1524 as c5, d1523 as c6, d1526 as c7, d2568 as c8 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2568 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2568;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec286"]:c2(),["SharedCodec406"]:c3(),["SharedCodec407"]:c4(),["SharedCodec408"]:c5(),["SharedCodec409"]:c6(),["SharedCodec410"]:c7(),["Webhook_merchant_readiness_updated_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_merchant_readiness_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
