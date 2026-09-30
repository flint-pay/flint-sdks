import { d144 as c0, d145 as c1, d143 as c2, d1642 as c3, d69 as c4, d1646 as c5, d1645 as c6, d1959 as c7, d1960 as c8 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d145 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d145;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Capability"]:c0(),["CapabilityListResponse"]:c1(),["CapabilityRequirements"]:c2(),["MoneyMovementBlockedReason"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCapabilityListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
