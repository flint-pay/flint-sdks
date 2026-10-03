import { d14 as c0, d743 as c1, d74 as c2, d1784 as c3, d1783 as c4, d2119 as c5, d2120 as c6, d2264 as c7, d13 as c8, d12 as c9 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2264 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2264;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["APIKey"]:c0(),["DeveloperSandboxWithAPIKey"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SandboxWithAPIKeyResponse"]:c7(),["SharedCodec0"]:c8(),["SharedCodec1"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSandboxWithAPIKeyResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
