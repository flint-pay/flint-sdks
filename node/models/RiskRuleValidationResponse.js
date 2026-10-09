import { d11 as c0, d323 as c1, d1820 as c2, d1821 as c3, d2162 as c4, d2163 as c5, d2300 as c6, d2303 as c7, d2304 as c8, d14 as c9, d1819 as c10 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2300 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2300;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Analysis"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["RiskRuleValidationResponse"]:c6(),["RuleValidation"]:c7(),["RuleWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec466"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskRuleValidationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
