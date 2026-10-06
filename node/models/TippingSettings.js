import { d77 as c0, d366 as c1, d2383 as c2, d2384 as c3, d2385 as c4 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2385 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2385;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SharedCodec128"]:c1(),["SharedCodec620"]:c2(),["SharedCodec621"]:c3(),["TippingSettings"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTippingSettings(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
