import { d1543 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d937 as c5, d1539 as c6, d1541 as c7, d1542 as c8, d1540 as c9 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1543 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1543;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookeff38a7dc9a0Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec287"]:c5(),["SharedCodec408"]:c6(),["SharedCodec409"]:c7(),["Webhook_customer_deletion_rejected_installed_merchants"]:c8(),["Webhook_customer_deletion_rejected_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookeff38a7dc9a0Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
