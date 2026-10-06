import { d1114 as c0, d930 as c1, d938 as c2, d525 as c3, d929 as c4, d934 as c5, d933 as c6, d932 as c7, d936 as c8, d937 as c9, d1113 as c10, d1112 as c11 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1114 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1114;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook3e1e165872bePayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec199"]:c3(),["SharedCodec282"]:c4(),["SharedCodec283"]:c5(),["SharedCodec284"]:c6(),["SharedCodec285"]:c7(),["SharedCodec286"]:c8(),["SharedCodec287"]:c9(),["Webhook_payment_intent_requires_capture_installed_merchants"]:c10(),["Webhook_payment_intent_requires_capture_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook3e1e165872bePayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
