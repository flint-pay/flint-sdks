import { d77 as c0, d1823 as c1, d1822 as c2, d2157 as c3, d2158 as c4, d14 as c5, d1821 as c6, d2598 as c7, d2599 as c8 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2599 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2599;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["SharedCodec1"]:c5(),["SharedCodec487"]:c6(),["WebhookSecret"]:c7(),["WebhookSecretRotationResponse"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhookSecretRotationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
