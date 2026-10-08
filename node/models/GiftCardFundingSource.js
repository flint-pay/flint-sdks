import { d334 as c0, d330 as c1, d331 as c2, d333 as c3, d332 as c4, d327 as c5, d326 as c6, d328 as c7, d329 as c8 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d334 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d334;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSource"]:c0(),["SharedCodec100"]:c1(),["SharedCodec101"]:c2(),["SharedCodec102"]:c3(),["SharedCodec103"]:c4(),["SharedCodec96"]:c5(),["SharedCodec97"]:c6(),["SharedCodec98"]:c7(),["SharedCodec99"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
