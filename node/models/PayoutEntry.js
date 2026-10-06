import { d2021 as c0, d40 as c1 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2021 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2021;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PayoutEntry"]:c0(),["SharedCodec5"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutEntry(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
