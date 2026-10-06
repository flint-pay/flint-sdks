import { d618 as c0, d617 as c1, d620 as c2, d77 as c3, d1823 as c4, d1822 as c5, d2157 as c6, d2158 as c7, d14 as c8, d1821 as c9 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d620 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d620;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryLocationSet"]:c0(),["DeliveryLocationSetConfiguration"]:c1(),["DeliveryLocationSetResponse"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec487"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryLocationSetResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
