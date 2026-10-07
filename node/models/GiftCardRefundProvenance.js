import { d325 as c0, d859 as c1, d314 as c2, d324 as c3, d323 as c4, d834 as c5, d858 as c6, d318 as c7, d317 as c8, d319 as c9, d320 as c10, d321 as c11, d322 as c12 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d859 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d859;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSource"]:c0(),["GiftCardRefundProvenance"]:c1(),["MoneyValue"]:c2(),["SharedCodec100"]:c3(),["SharedCodec101"]:c4(),["SharedCodec235"]:c5(),["SharedCodec236"]:c6(),["SharedCodec94"]:c7(),["SharedCodec95"]:c8(),["SharedCodec96"]:c9(),["SharedCodec97"]:c10(),["SharedCodec98"]:c11(),["SharedCodec99"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardRefundProvenance(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
