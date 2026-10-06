import { d2511 as c0, d2512 as c1, d2513 as c2 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2513 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2513;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec669"]:c0(),["SharedCodec670"]:c1(),["UpdateSubscriptionBillingScheduleRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionBillingScheduleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
