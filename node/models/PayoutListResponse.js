import { d780 as c0, d781 as c1, d1783 as c2, d1784 as c3, d74 as c4, d1786 as c5, d1785 as c6, d1979 as c7, d1985 as c8, d2122 as c9, d38 as c10, d1974 as c11, d1975 as c12, d1976 as c13, d1977 as c14, d1978 as c15, d1806 as c16 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1985 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1985;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPayoutDestinationSummary"]:c0(),["ExpandedPayoutSummary"]:c1(),["MoneyMovementHistoryMeta"]:c2(),["MoneyMovementListMeta"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["Payout"]:c7(),["PayoutListResponse"]:c8(),["ResponseWarning"]:c9(),["SharedCodec5"]:c10(),["SharedCodec511"]:c11(),["SharedCodec512"]:c12(),["SharedCodec513"]:c13(),["SharedCodec514"]:c14(),["SharedCodec515"]:c15(),["SignedMoney"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
