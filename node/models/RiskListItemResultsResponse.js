import { d323 as c0, d1820 as c1, d1821 as c2, d2097 as c3, d2162 as c4, d2163 as c5, d2284 as c6, d2287 as c7, d2288 as c8, d14 as c9, d1819 as c10 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2288 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2288;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PublicRiskListItemResult"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["RiskListItem"]:c6(),["RiskListItemResultsData"]:c7(),["RiskListItemResultsResponse"]:c8(),["SharedCodec1"]:c9(),["SharedCodec466"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskListItemResultsResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
