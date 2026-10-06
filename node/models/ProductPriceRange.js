import { d77 as c0, d2047 as c1 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2047 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2047;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ProductPriceRange"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductPriceRange(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
