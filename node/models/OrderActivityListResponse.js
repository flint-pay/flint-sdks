import { d77 as c0, d1823 as c1, d1822 as c2, d1843 as c3, d1844 as c4, d2157 as c5, d2158 as c6, d14 as c7, d1821 as c8, d1842 as c9, d226 as c10 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1844 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1844;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["OrderActivity"]:c3(),["OrderActivityListResponse"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec1"]:c7(),["SharedCodec487"]:c8(),["SharedCodec491"]:c9(),["SignedMoney"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderActivityListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
