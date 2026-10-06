import { d1257 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d969 as c6, d1256 as c7, d1255 as c8 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1257 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1257;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook7adf7ff33e7aPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec303"]:c6(),["Webhook_return_inspection_created_installed_merchants"]:c7(),["Webhook_return_inspection_created_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook7adf7ff33e7aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
