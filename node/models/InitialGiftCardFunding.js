import { d334 as c0, d344 as c1, d323 as c2, d330 as c3, d331 as c4, d333 as c5, d332 as c6, d336 as c7, d337 as c8, d339 as c9, d338 as c10, d325 as c11, d324 as c12, d335 as c13, d327 as c14, d326 as c15, d328 as c16, d329 as c17 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d344 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d344;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSource"]:c0(),["InitialGiftCardFunding"]:c1(),["MoneyValue"]:c2(),["SharedCodec100"]:c3(),["SharedCodec101"]:c4(),["SharedCodec102"]:c5(),["SharedCodec103"]:c6(),["SharedCodec104"]:c7(),["SharedCodec105"]:c8(),["SharedCodec106"]:c9(),["SharedCodec107"]:c10(),["SharedCodec93"]:c11(),["SharedCodec94"]:c12(),["SharedCodec95"]:c13(),["SharedCodec96"]:c14(),["SharedCodec97"]:c15(),["SharedCodec98"]:c16(),["SharedCodec99"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInitialGiftCardFunding(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
