import { d1823 as c0, d1824 as c1, d14 as c2, d1822 as c3 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1823 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1823;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["NextAction"]:c0(),["NextActionMerchantAccountSession"]:c1(),["SharedCodec1"]:c2(),["SharedCodec467"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeNextAction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
