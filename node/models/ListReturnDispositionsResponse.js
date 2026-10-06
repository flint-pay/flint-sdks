import { d1733 as c0, d77 as c1, d1797 as c2, d1796 as c3, d2131 as c4, d2132 as c5, d2137 as c6, d2139 as c7, d14 as c8, d1795 as c9 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1733 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1733;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ListReturnDispositionsResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnActor"]:c6(),["ReturnDisposition"]:c7(),["SharedCodec1"]:c8(),["SharedCodec485"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeListReturnDispositionsResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
