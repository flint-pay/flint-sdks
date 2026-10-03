import { d353 as c0, d346 as c1, d345 as c2, d347 as c3, d348 as c4, d349 as c5, d350 as c6, d352 as c7, d351 as c8 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d353 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d353;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSource"]:c0(),["SharedCodec117"]:c1(),["SharedCodec118"]:c2(),["SharedCodec119"]:c3(),["SharedCodec120"]:c4(),["SharedCodec121"]:c5(),["SharedCodec122"]:c6(),["SharedCodec123"]:c7(),["SharedCodec124"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
