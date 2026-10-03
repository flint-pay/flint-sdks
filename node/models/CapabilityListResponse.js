import { d161 as c0, d162 as c1, d160 as c2, d1780 as c3, d74 as c4, d1784 as c5, d1783 as c6, d2118 as c7, d2119 as c8 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d162 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d162;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Capability"]:c0(),["CapabilityListResponse"]:c1(),["CapabilityRequirements"]:c2(),["MoneyMovementBlockedReason"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCapabilityListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
