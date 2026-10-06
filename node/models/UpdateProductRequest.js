import { d928 as c0, d2395 as c1, d2397 as c2, d2484 as c3, d2482 as c4, d2483 as c5, d2485 as c6 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2485 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2485;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageRequest"]:c0(),["SharedCodec623"]:c1(),["SharedCodec625"]:c2(),["SharedCodec663"]:c3(),["UpdateProductOptionRequest"]:c4(),["UpdateProductOptionValueRequest"]:c5(),["UpdateProductRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
