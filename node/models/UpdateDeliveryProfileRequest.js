import { d686 as c0, d680 as c1, d670 as c2, d678 as c3, d679 as c4, d682 as c5, d681 as c6, d683 as c7, d685 as c8, d684 as c9, d2419 as c10, d2427 as c11, d672 as c12 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2427 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2427;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["Dimensions"]:c2(),["SharedCodec224"]:c3(),["SharedCodec225"]:c4(),["SharedCodec226"]:c5(),["SharedCodec227"]:c6(),["SharedCodec228"]:c7(),["SharedCodec229"]:c8(),["SharedCodec230"]:c9(),["SharedCodec636"]:c10(),["UpdateDeliveryProfileRequest"]:c11(),["Weight"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
