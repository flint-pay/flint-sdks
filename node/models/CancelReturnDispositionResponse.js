import { d159 as c0, d77 as c1, d1823 as c2, d1822 as c3, d2157 as c4, d2158 as c5, d2160 as c6, d2163 as c7, d2165 as c8, d14 as c9, d1821 as c10 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d159 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d159;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CancelReturnDispositionResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["RetryReturnDispositionResponse"]:c6(),["ReturnActor"]:c7(),["ReturnDisposition"]:c8(),["SharedCodec1"]:c9(),["SharedCodec487"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelReturnDispositionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
