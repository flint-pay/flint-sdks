import { d694 as c0, d2412 as c1, d2421 as c2, d2422 as c3 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2422 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2422;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateCallbackConfiguration"]:c0(),["SharedCodec631"]:c1(),["SharedCodec637"]:c2(),["UpdateDeliveryRateCallbackRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryRateCallbackRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
