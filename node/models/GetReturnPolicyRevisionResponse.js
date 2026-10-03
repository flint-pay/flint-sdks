import { d854 as c0, d74 as c1, d1786 as c2, d1785 as c3, d2121 as c4, d2122 as c5, d2180 as c6, d2196 as c7, d2232 as c8, d2234 as c9, d2235 as c10, d2194 as c11, d2195 as c12 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d854 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d854;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GetReturnPolicyRevisionResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnPolicyRevision"]:c6(),["ReturnPolicyScope"]:c7(),["ReturnRestockingFeePolicy"]:c8(),["ReturnShippingPolicy"]:c9(),["ReturnWindow"]:c10(),["SharedCodec572"]:c11(),["SharedCodec573"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGetReturnPolicyRevisionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
