import { d74 as c0, d1784 as c1, d1783 as c2, d2056 as c3, d2119 as c4, d2120 as c5, d2241 as c6, d2244 as c7, d2245 as c8 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2245 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2245;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PublicRiskListItemResult"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["RiskListItem"]:c6(),["RiskListItemResultsData"]:c7(),["RiskListItemResultsResponse"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskListItemResultsResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
