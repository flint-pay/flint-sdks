import { d746 as c0, d747 as c1, d1772 as c2, d1773 as c3, d314 as c4, d1775 as c5, d1776 as c6, d1974 as c7, d1980 as c8, d1984 as c9, d2113 as c10, d14 as c11, d834 as c12, d1774 as c13, d1971 as c14, d1972 as c15, d1973 as c16, d1970 as c17 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1980 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1980;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPayoutDestinationSummary"]:c0(),["ExpandedPayoutSummary"]:c1(),["MoneyMovementHistoryMeta"]:c2(),["MoneyMovementListMeta"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["Payout"]:c7(),["PayoutListResponse"]:c8(),["PayoutTraceID"]:c9(),["ResponseWarning"]:c10(),["SharedCodec1"]:c11(),["SharedCodec235"]:c12(),["SharedCodec448"]:c13(),["SharedCodec486"]:c14(),["SharedCodec487"]:c15(),["SharedCodec488"]:c16(),["SignedMoney"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
