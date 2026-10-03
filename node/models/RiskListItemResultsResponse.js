import { d74 as c0, d1784 as c1, d1783 as c2, d2055 as c3, d2118 as c4, d2119 as c5, d2240 as c6, d2243 as c7, d2244 as c8 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2244 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2244;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PublicRiskListItemResult"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["RiskListItem"]:c6(),["RiskListItemResultsData"]:c7(),["RiskListItemResultsResponse"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskListItemResultsResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
