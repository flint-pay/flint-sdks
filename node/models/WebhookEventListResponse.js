import { d77 as c0, d1830 as c1, d1829 as c2, d2164 as c3, d2165 as c4, d14 as c5, d943 as c6, d1828 as c7, d2599 as c8, d2600 as c9, d2601 as c10 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2601 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2601;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["SharedCodec1"]:c5(),["SharedCodec291"]:c6(),["SharedCodec492"]:c7(),["SharedCodec676"]:c8(),["WebhookEvent"]:c9(),["WebhookEventListResponse"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhookEventListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
