import { d1528 as c0, d936 as c1, d526 as c2, d935 as c3, d1527 as c4, d1525 as c5, d1524 as c6, d1523 as c7, d1526 as c8, d2568 as c9 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1528 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1528;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhooke817b6292432Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec199"]:c2(),["SharedCodec286"]:c3(),["SharedCodec406"]:c4(),["SharedCodec407"]:c5(),["SharedCodec408"]:c6(),["SharedCodec409"]:c7(),["SharedCodec410"]:c8(),["Webhook_merchant_readiness_updated_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhooke817b6292432Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
