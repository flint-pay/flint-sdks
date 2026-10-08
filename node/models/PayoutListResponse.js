import { d767 as c0, d768 as c1, d1817 as c2, d1818 as c3, d323 as c4, d1820 as c5, d1821 as c6, d2021 as c7, d2027 as c8, d2031 as c9, d2163 as c10, d14 as c11, d855 as c12, d1819 as c13, d2018 as c14, d2019 as c15, d2020 as c16, d2017 as c17 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2027 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2027;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPayoutDestinationSummary"]:c0(),["ExpandedPayoutSummary"]:c1(),["MoneyMovementHistoryMeta"]:c2(),["MoneyMovementListMeta"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["Payout"]:c7(),["PayoutListResponse"]:c8(),["PayoutTraceID"]:c9(),["ResponseWarning"]:c10(),["SharedCodec1"]:c11(),["SharedCodec244"]:c12(),["SharedCodec466"]:c13(),["SharedCodec504"]:c14(),["SharedCodec505"]:c15(),["SharedCodec506"]:c16(),["SignedMoney"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
