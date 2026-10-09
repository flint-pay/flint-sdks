import { d323 as c0, d1820 as c1, d1821 as c2, d2162 as c3, d2163 as c4, d14 as c5, d477 as c6, d476 as c7, d1819 as c8, d2369 as c9, d2371 as c10 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2371 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2371;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["SharedCodec1"]:c5(),["SharedCodec161"]:c6(),["SharedCodec162"]:c7(),["SharedCodec466"]:c8(),["SubscriptionOffer"]:c9(),["SubscriptionOfferResponse"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionOfferResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
