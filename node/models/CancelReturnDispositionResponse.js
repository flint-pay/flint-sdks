import { d155 as c0, d77 as c1, d1797 as c2, d1796 as c3, d2131 as c4, d2132 as c5, d2134 as c6, d2137 as c7, d2139 as c8, d14 as c9, d1795 as c10 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d155 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d155;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CancelReturnDispositionResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["RetryReturnDispositionResponse"]:c6(),["ReturnActor"]:c7(),["ReturnDisposition"]:c8(),["SharedCodec1"]:c9(),["SharedCodec485"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelReturnDispositionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
