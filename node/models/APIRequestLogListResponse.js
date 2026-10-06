import { d21 as c0, d25 as c1, d24 as c2, d28 as c3, d77 as c4, d1823 as c5, d1822 as c6, d2157 as c7, d2158 as c8, d14 as c9, d20 as c10, d1821 as c11 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d25 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d25;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["APIRequestLog"]:c0(),["APIRequestLogListResponse"]:c1(),["ApiRequestLogExpansionShape"]:c2(),["ApiRequestLogResponseShapeMetadata"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec2"]:c10(),["SharedCodec487"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAPIRequestLogListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
