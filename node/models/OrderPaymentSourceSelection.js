import { d1881 as c0, d1882 as c1 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1882 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1882;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderPaymentSourceCardSelection"]:c0(),["OrderPaymentSourceSelection"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderPaymentSourceSelection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
