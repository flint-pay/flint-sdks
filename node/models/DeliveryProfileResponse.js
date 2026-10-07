import { d675 as c0, d673 as c1, d671 as c2, d689 as c3, d670 as c4, d77 as c5, d1830 as c6, d1829 as c7, d2164 as c8, d2165 as c9, d14 as c10, d674 as c11, d1828 as c12, d672 as c13 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d689 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d689;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfile"]:c0(),["DeliveryProfileConfiguration"]:c1(),["DeliveryProfileOriginPolicy"]:c2(),["DeliveryProfileResponse"]:c3(),["Dimensions"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SharedCodec1"]:c10(),["SharedCodec223"]:c11(),["SharedCodec492"]:c12(),["Weight"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
