import { d670 as c0, d668 as c1, d666 as c2, d684 as c3, d665 as c4, d77 as c5, d1824 as c6, d1823 as c7, d2158 as c8, d2159 as c9, d14 as c10, d669 as c11, d1822 as c12, d667 as c13 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d684 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d684;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfile"]:c0(),["DeliveryProfileConfiguration"]:c1(),["DeliveryProfileOriginPolicy"]:c2(),["DeliveryProfileResponse"]:c3(),["Dimensions"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SharedCodec1"]:c10(),["SharedCodec219"]:c11(),["SharedCodec488"]:c12(),["Weight"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
