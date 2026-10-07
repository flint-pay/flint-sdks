import { d314 as c0, d1775 as c1, d1776 as c2, d2048 as c3, d2112 as c4, d2113 as c5, d2234 as c6, d2237 as c7, d2238 as c8, d14 as c9, d1774 as c10 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2238 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2238;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PublicRiskListItemResult"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["RiskListItem"]:c6(),["RiskListItemResultsData"]:c7(),["RiskListItemResultsResponse"]:c8(),["SharedCodec1"]:c9(),["SharedCodec448"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskListItemResultsResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
