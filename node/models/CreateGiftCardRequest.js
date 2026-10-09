import { d346 as c0, d334 as c1, d864 as c2, d344 as c3, d323 as c4, d330 as c5, d331 as c6, d333 as c7, d332 as c8, d336 as c9, d337 as c10, d339 as c11, d338 as c12, d345 as c13, d325 as c14, d324 as c15, d335 as c16, d327 as c17, d326 as c18, d328 as c19, d329 as c20 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d346 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d346;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRequest"]:c0(),["GiftCardFundingSource"]:c1(),["GiftCardNotificationRecipient"]:c2(),["InitialGiftCardFunding"]:c3(),["MoneyValue"]:c4(),["SharedCodec100"]:c5(),["SharedCodec101"]:c6(),["SharedCodec102"]:c7(),["SharedCodec103"]:c8(),["SharedCodec104"]:c9(),["SharedCodec105"]:c10(),["SharedCodec106"]:c11(),["SharedCodec107"]:c12(),["SharedCodec109"]:c13(),["SharedCodec93"]:c14(),["SharedCodec94"]:c15(),["SharedCodec95"]:c16(),["SharedCodec96"]:c17(),["SharedCodec97"]:c18(),["SharedCodec98"]:c19(),["SharedCodec99"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
