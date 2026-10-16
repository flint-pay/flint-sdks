import { d1820 as c0, d1821 as c1, d323 as c2, d1823 as c3, d1824 as c4, d2039 as c5, d2040 as c6, d2179 as c7, d14 as c8, d1822 as c9 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2040 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2040;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyMovementHistoryMeta"]:c0(),["MoneyMovementListMeta"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["PayoutDestination"]:c5(),["PayoutDestinationListResponse"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec467"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutDestinationListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
