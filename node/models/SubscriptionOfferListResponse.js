import { d323 as c0, d1823 as c1, d1824 as c2, d2178 as c3, d2179 as c4, d14 as c5, d487 as c6, d486 as c7, d1822 as c8, d2385 as c9, d2386 as c10 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2386 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2386;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["SharedCodec1"]:c5(),["SharedCodec167"]:c6(),["SharedCodec168"]:c7(),["SharedCodec467"]:c8(),["SubscriptionOffer"]:c9(),["SubscriptionOfferListResponse"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionOfferListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
