import { d1772 as c0, d1773 as c1, d314 as c2, d1775 as c3, d1776 as c4, d1975 as c5, d1976 as c6, d2113 as c7, d14 as c8, d1774 as c9 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1976 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1976;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyMovementHistoryMeta"]:c0(),["MoneyMovementListMeta"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["PayoutDestination"]:c5(),["PayoutDestinationListResponse"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec448"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutDestinationListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
