import { d874 as c0, d875 as c1, d323 as c2 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d874 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d874;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardPurchaseRefundRecovery"]:c0(),["GiftCardPurchaseRefundRecoveryDestination"]:c1(),["MoneyValue"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardPurchaseRefundRecovery(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
