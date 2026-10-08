import { d767 as c0, d768 as c1, d323 as c2, d1820 as c3, d1821 as c4, d2021 as c5, d2028 as c6, d2031 as c7, d2162 as c8, d2163 as c9, d14 as c10, d855 as c11, d1819 as c12, d2018 as c13, d2019 as c14, d2020 as c15, d2017 as c16 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2028 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2028;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPayoutDestinationSummary"]:c0(),["ExpandedPayoutSummary"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["Payout"]:c5(),["PayoutResponse"]:c6(),["PayoutTraceID"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SharedCodec1"]:c10(),["SharedCodec244"]:c11(),["SharedCodec466"]:c12(),["SharedCodec504"]:c13(),["SharedCodec505"]:c14(),["SharedCodec506"]:c15(),["SignedMoney"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
