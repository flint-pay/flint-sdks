import { d69 as c0, d1646 as c1, d1645 as c2, d1903 as c3, d1904 as c4, d1959 as c5, d1960 as c6, d2094 as c7 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2094 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2094;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PublicRiskAttribute"]:c3(),["PublicRiskAttributeRegistry"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["RiskRuleAttributeRegistryResponse"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskRuleAttributeRegistryResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
