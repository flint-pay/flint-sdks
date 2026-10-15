import { d887 as c0, d323 as c1, d2034 as c2 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d887 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d887;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardTransaction"]:c0(),["MoneyValue"]:c1(),["SignedMoney"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardTransaction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
