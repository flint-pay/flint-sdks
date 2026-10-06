import { d1336 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d1332 as c6, d1334 as c7, d1335 as c8, d1333 as c9 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1336 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1336;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook98a976c72b8ePayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec373"]:c6(),["SharedCodec374"]:c7(),["Webhook_payment_method_removed_installed_merchants"]:c8(),["Webhook_payment_method_removed_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook98a976c72b8ePayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
