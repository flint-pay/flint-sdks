import { d541 as c0, d542 as c1, d323 as c2, d1823 as c3, d1824 as c4, d2178 as c5, d2179 as c6, d14 as c7, d1822 as c8 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d542 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d542;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerSession"]:c0(),["CustomerSessionResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec1"]:c7(),["SharedCodec467"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerSessionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
