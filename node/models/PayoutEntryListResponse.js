import { d323 as c0, d1820 as c1, d1821 as c2, d2025 as c3, d2026 as c4, d2162 as c5, d2163 as c6, d14 as c7, d1819 as c8, d2017 as c9 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2026 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2026;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PayoutEntry"]:c3(),["PayoutEntryListResponse"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec1"]:c7(),["SharedCodec466"]:c8(),["SignedMoney"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayoutEntryListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
