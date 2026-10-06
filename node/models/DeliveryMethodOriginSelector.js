import { d625 as c0, d623 as c1, d624 as c2, d286 as c3, d285 as c4 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d625 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d625;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelector"]:c0(),["SharedCodec208"]:c1(),["SharedCodec209"]:c2(),["SharedCodec75"]:c3(),["SharedCodec76"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelector(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
