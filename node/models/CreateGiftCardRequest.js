import { d337 as c0, d325 as c1, d843 as c2, d335 as c3, d314 as c4, d324 as c5, d323 as c6, d327 as c7, d328 as c8, d330 as c9, d329 as c10, d336 as c11, d316 as c12, d315 as c13, d326 as c14, d318 as c15, d317 as c16, d319 as c17, d320 as c18, d321 as c19, d322 as c20 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d337 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d337;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRequest"]:c0(),["GiftCardFundingSource"]:c1(),["GiftCardNotificationRecipient"]:c2(),["InitialGiftCardFunding"]:c3(),["MoneyValue"]:c4(),["SharedCodec100"]:c5(),["SharedCodec101"]:c6(),["SharedCodec102"]:c7(),["SharedCodec103"]:c8(),["SharedCodec104"]:c9(),["SharedCodec105"]:c10(),["SharedCodec107"]:c11(),["SharedCodec91"]:c12(),["SharedCodec92"]:c13(),["SharedCodec93"]:c14(),["SharedCodec94"]:c15(),["SharedCodec95"]:c16(),["SharedCodec96"]:c17(),["SharedCodec97"]:c18(),["SharedCodec98"]:c19(),["SharedCodec99"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
