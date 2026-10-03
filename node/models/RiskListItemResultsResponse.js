import { d74 as c0, d1784 as c1, d1783 as c2, d2055 as c3, d2118 as c4, d2119 as c5, d2240 as c6, d2243 as c7, d2244 as c8 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2244 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2244;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PublicRiskListItemResult"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["RiskListItem"]:c6(),["RiskListItemResultsData"]:c7(),["RiskListItemResultsResponse"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskListItemResultsResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
