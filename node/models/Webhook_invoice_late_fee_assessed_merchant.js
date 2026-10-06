import { d930 as c0, d77 as c1, d525 as c2, d929 as c3, d1241 as c4, d1246 as c5 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1246 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1246;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["MoneyValue"]:c1(),["SharedCodec199"]:c2(),["SharedCodec282"]:c3(),["SharedCodec355"]:c4(),["Webhook_invoice_late_fee_assessed_merchant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_late_fee_assessed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
