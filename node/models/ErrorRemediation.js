import { d777 as c0, d1797 as c1, d1796 as c2, d14 as c3, d1795 as c4 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d777 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d777;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["SharedCodec1"]:c3(),["SharedCodec485"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeErrorRemediation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
