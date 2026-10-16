import { d323 as c0, d1823 as c1, d1824 as c2, d2113 as c3, d2114 as c4, d2178 as c5, d2179 as c6, d2313 as c7, d14 as c8, d1822 as c9 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2313 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2313;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PublicRiskAttribute"]:c3(),["PublicRiskAttributeRegistry"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["RiskRuleAttributeRegistryResponse"]:c7(),["SharedCodec1"]:c8(),["SharedCodec467"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskRuleAttributeRegistryResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
