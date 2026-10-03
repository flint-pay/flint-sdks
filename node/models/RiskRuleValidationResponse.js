import { d9 as c0, d74 as c1, d1784 as c2, d1783 as c3, d2118 as c4, d2119 as c5, d2256 as c6, d2259 as c7, d2260 as c8 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2256 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2256;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Analysis"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["RiskRuleValidationResponse"]:c6(),["RuleValidation"]:c7(),["RuleWarning"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskRuleValidationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
