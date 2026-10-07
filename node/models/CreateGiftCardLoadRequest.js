import { d331 as c0, d325 as c1, d314 as c2, d324 as c3, d323 as c4, d327 as c5, d328 as c6, d330 as c7, d329 as c8, d316 as c9, d315 as c10, d326 as c11, d318 as c12, d317 as c13, d319 as c14, d320 as c15, d321 as c16, d322 as c17 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d331 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d331;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardLoadRequest"]:c0(),["GiftCardFundingSource"]:c1(),["MoneyValue"]:c2(),["SharedCodec100"]:c3(),["SharedCodec101"]:c4(),["SharedCodec102"]:c5(),["SharedCodec103"]:c6(),["SharedCodec104"]:c7(),["SharedCodec105"]:c8(),["SharedCodec91"]:c9(),["SharedCodec92"]:c10(),["SharedCodec93"]:c11(),["SharedCodec94"]:c12(),["SharedCodec95"]:c13(),["SharedCodec96"]:c14(),["SharedCodec97"]:c15(),["SharedCodec98"]:c16(),["SharedCodec99"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardLoadRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
