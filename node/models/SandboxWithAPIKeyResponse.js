import { d16 as c0, d761 as c1, d77 as c2, d1823 as c3, d1822 as c4, d2157 as c5, d2158 as c6, d2302 as c7, d15 as c8, d14 as c9, d1821 as c10 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2302 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2302;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["APIKey"]:c0(),["DeveloperSandboxWithAPIKey"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SandboxWithAPIKeyResponse"]:c7(),["SharedCodec0"]:c8(),["SharedCodec1"]:c9(),["SharedCodec487"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSandboxWithAPIKeyResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
