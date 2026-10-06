import { d1884 as c0, d41 as c1 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1884 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1884;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderReturnCreditSettlement"]:c0(),["SharedCodec6"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderReturnCreditSettlement(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
