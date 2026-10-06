import { d930 as c0, d525 as c1, d929 as c2, d934 as c3, d933 as c4, d932 as c5, d935 as c6 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d935 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d935;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec199"]:c1(),["SharedCodec282"]:c2(),["SharedCodec283"]:c3(),["SharedCodec284"]:c4(),["SharedCodec285"]:c5(),["Webhook_payment_intent_requires_action_merchant"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_payment_intent_requires_action_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
