import { d670 as c0, d668 as c1, d683 as c2, d666 as c3, d665 as c4, d77 as c5, d1823 as c6, d1822 as c7, d2157 as c8, d2158 as c9, d14 as c10, d669 as c11, d1821 as c12, d667 as c13 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d683 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d683;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfile"]:c0(),["DeliveryProfileConfiguration"]:c1(),["DeliveryProfileListResponse"]:c2(),["DeliveryProfileOriginPolicy"]:c3(),["Dimensions"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SharedCodec1"]:c10(),["SharedCodec219"]:c11(),["SharedCodec487"]:c12(),["Weight"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
