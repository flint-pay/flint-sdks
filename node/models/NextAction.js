import { d1797 as c0, d1796 as c1, d14 as c2, d1795 as c3 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1797 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1797;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["NextAction"]:c0(),["NextActionMerchantAccountSession"]:c1(),["SharedCodec1"]:c2(),["SharedCodec485"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeNextAction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
