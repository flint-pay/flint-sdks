import { d74 as c0, d1786 as c1, d1785 as c2, d2056 as c3, d2057 as c4, d2121 as c5, d2122 as c6, d2256 as c7 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2256 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2256;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PublicRiskAttribute"]:c3(),["PublicRiskAttributeRegistry"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["RiskRuleAttributeRegistryResponse"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskRuleAttributeRegistryResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
