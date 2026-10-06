import { d77 as c0, d1823 as c1, d1822 as c2, d2157 as c3, d2158 as c4, d14 as c5, d937 as c6, d1821 as c7, d2592 as c8, d2593 as c9, d2595 as c10 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2595 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2595;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["SharedCodec1"]:c5(),["SharedCodec287"]:c6(),["SharedCodec487"]:c7(),["SharedCodec671"]:c8(),["WebhookEvent"]:c9(),["WebhookEventResponse"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhookEventResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
