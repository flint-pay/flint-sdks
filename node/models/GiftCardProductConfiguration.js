import { d881 as c0, d904 as c1, d412 as c2 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d904 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d904;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBounds"]:c0(),["GiftCardProductConfiguration"]:c1(),["SharedCodec149"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardProductConfiguration(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
