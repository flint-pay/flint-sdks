import { d333 as c0, d686 as c1, d680 as c2, d670 as c3, d678 as c4, d679 as c5, d682 as c6, d681 as c7, d683 as c8, d685 as c9, d684 as c10, d672 as c11 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d333 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d333;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["Dimensions"]:c3(),["SharedCodec224"]:c4(),["SharedCodec225"]:c5(),["SharedCodec226"]:c6(),["SharedCodec227"]:c7(),["SharedCodec228"]:c8(),["SharedCodec229"]:c9(),["SharedCodec230"]:c10(),["Weight"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
