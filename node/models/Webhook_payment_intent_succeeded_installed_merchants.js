import { d938 as c0, d933 as c1, d932 as c2, d936 as c3, d937 as c4, d1239 as c5 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1239 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1239;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec284"]:c1(),["SharedCodec285"]:c2(),["SharedCodec286"]:c3(),["SharedCodec287"]:c4(),["Webhook_payment_intent_succeeded_installed_merchants"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_payment_intent_succeeded_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
