import { d1770 as c0, d200 as c1, d1768 as c2, d1769 as c3, d1773 as c4, d77 as c5, d1823 as c6, d1822 as c7, d2157 as c8, d2158 as c9, d14 as c10, d1821 as c11 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1773 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1773;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Location"]:c0(),["LocationAddress"]:c1(),["LocationCoordinate"]:c2(),["LocationInventory"]:c3(),["LocationListResponse"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SharedCodec1"]:c10(),["SharedCodec487"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLocationListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
