import { d16 as c0, d767 as c1, d77 as c2, d1830 as c3, d1829 as c4, d2164 as c5, d2165 as c6, d2309 as c7, d15 as c8, d14 as c9, d1828 as c10 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2309 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2309;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["APIKey"]:c0(),["DeveloperSandboxWithAPIKey"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SandboxWithAPIKeyResponse"]:c7(),["SharedCodec0"]:c8(),["SharedCodec1"]:c9(),["SharedCodec492"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSandboxWithAPIKeyResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
