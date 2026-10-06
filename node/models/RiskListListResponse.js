import { d77 as c0, d1823 as c1, d1822 as c2, d2157 as c3, d2158 as c4, d2278 as c5, d2284 as c6, d14 as c7, d1821 as c8 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2284 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2284;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["RiskList"]:c5(),["RiskListListResponse"]:c6(),["SharedCodec1"]:c7(),["SharedCodec487"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskListListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
