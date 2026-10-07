import { d325 as c0, d324 as c1, d323 as c2, d318 as c3, d317 as c4, d319 as c5, d320 as c6, d321 as c7, d322 as c8 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d325 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d325;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSource"]:c0(),["SharedCodec100"]:c1(),["SharedCodec101"]:c2(),["SharedCodec94"]:c3(),["SharedCodec95"]:c4(),["SharedCodec96"]:c5(),["SharedCodec97"]:c6(),["SharedCodec98"]:c7(),["SharedCodec99"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
