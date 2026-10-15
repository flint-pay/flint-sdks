import { d334 as c0, d885 as c1, d323 as c2, d330 as c3, d331 as c4, d333 as c5, d332 as c6, d860 as c7, d884 as c8, d327 as c9, d326 as c10, d328 as c11, d329 as c12 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d885 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d885;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSource"]:c0(),["GiftCardRefundProvenance"]:c1(),["MoneyValue"]:c2(),["SharedCodec100"]:c3(),["SharedCodec101"]:c4(),["SharedCodec102"]:c5(),["SharedCodec103"]:c6(),["SharedCodec248"]:c7(),["SharedCodec249"]:c8(),["SharedCodec96"]:c9(),["SharedCodec97"]:c10(),["SharedCodec98"]:c11(),["SharedCodec99"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardRefundProvenance(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
