import { d742 as c0, d323 as c1, d1823 as c2, d1824 as c3, d2178 as c4, d2179 as c5, d2321 as c6, d14 as c7, d1822 as c8 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2321 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2321;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeveloperSandbox"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["SandboxListResponse"]:c6(),["SharedCodec1"]:c7(),["SharedCodec467"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSandboxListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
