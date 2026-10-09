import { d323 as c0, d1820 as c1, d1821 as c2, d1844 as c3, d1845 as c4, d2162 as c5, d2163 as c6, d14 as c7, d1819 as c8, d1843 as c9, d2017 as c10 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1845 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1845;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["OrderActivity"]:c3(),["OrderActivityListResponse"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec1"]:c7(),["SharedCodec466"]:c8(),["SharedCodec472"]:c9(),["SignedMoney"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderActivityListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
