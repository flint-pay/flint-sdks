import { d1196 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d969 as c6, d1195 as c7, d1194 as c8 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1196 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1196;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook64406eae7092Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec303"]:c6(),["Webhook_return_updated_installed_merchants"]:c7(),["Webhook_return_updated_merchant"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook64406eae7092Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
