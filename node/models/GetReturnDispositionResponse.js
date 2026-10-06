import { d869 as c0, d77 as c1, d1823 as c2, d1822 as c3, d2157 as c4, d2158 as c5, d2160 as c6, d2163 as c7, d2165 as c8, d14 as c9, d1821 as c10 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d869 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d869;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GetReturnDispositionResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["RetryReturnDispositionResponse"]:c6(),["ReturnActor"]:c7(),["ReturnDisposition"]:c8(),["SharedCodec1"]:c9(),["SharedCodec487"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGetReturnDispositionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
