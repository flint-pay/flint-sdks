import { d617 as c0, d2412 as c1, d2413 as c2 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2413 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2413;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryLocationSetConfiguration"]:c0(),["SharedCodec631"]:c1(),["UpdateDeliveryLocationSetRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryLocationSetRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
