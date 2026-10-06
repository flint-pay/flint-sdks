import { d748 as c0, d749 as c1, d77 as c2, d1797 as c3, d1796 as c4, d2131 as c5, d2132 as c6, d14 as c7, d744 as c8, d745 as c9, d746 as c10, d747 as c11, d1795 as c12, d230 as c13 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d749 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d749;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeveloperAuthContext"]:c0(),["DeveloperAuthContextResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec1"]:c7(),["SharedCodec241"]:c8(),["SharedCodec242"]:c9(),["SharedCodec243"]:c10(),["SharedCodec244"]:c11(),["SharedCodec485"]:c12(),["SharedCodec59"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeveloperAuthContextResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
