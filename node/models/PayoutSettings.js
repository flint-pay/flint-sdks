import { d1816 as c0, d323 as c1, d1820 as c2, d1821 as c3, d2029 as c4, d14 as c5, d1819 as c6 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2029 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2029;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyMovementBlockedReason"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PayoutSettings"]:c4(),["SharedCodec1"]:c5(),["SharedCodec466"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutSettings(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
