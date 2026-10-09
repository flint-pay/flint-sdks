import { d334 as c0, d880 as c1, d323 as c2, d330 as c3, d331 as c4, d333 as c5, d332 as c6, d855 as c7, d879 as c8, d327 as c9, d326 as c10, d328 as c11, d329 as c12 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d880 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d880;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSource"]:c0(),["GiftCardRefundProvenance"]:c1(),["MoneyValue"]:c2(),["SharedCodec100"]:c3(),["SharedCodec101"]:c4(),["SharedCodec102"]:c5(),["SharedCodec103"]:c6(),["SharedCodec244"]:c7(),["SharedCodec245"]:c8(),["SharedCodec96"]:c9(),["SharedCodec97"]:c10(),["SharedCodec98"]:c11(),["SharedCodec99"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardRefundProvenance(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
