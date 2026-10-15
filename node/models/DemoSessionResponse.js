import { d732 as c0, d733 as c1, d734 as c2, d323 as c3, d1823 as c4, d1824 as c5, d2178 as c6, d2179 as c7, d15 as c8, d14 as c9, d1822 as c10 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d734 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d734;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DemoSession"]:c0(),["DemoSessionAPIKey"]:c1(),["DemoSessionResponse"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SharedCodec0"]:c8(),["SharedCodec1"]:c9(),["SharedCodec467"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDemoSessionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
