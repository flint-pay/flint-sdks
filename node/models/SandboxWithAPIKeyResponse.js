import { d14 as c0, d743 as c1, d74 as c2, d1784 as c3, d1783 as c4, d2118 as c5, d2119 as c6, d2263 as c7, d13 as c8, d12 as c9 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2263 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2263;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["APIKey"]:c0(),["DeveloperSandboxWithAPIKey"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SandboxWithAPIKeyResponse"]:c7(),["SharedCodec0"]:c8(),["SharedCodec1"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSandboxWithAPIKeyResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
