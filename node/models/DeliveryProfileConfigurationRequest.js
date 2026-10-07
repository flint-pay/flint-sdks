import { d686 as c0, d680 as c1, d670 as c2, d678 as c3, d679 as c4, d682 as c5, d681 as c6, d683 as c7, d685 as c8, d684 as c9, d672 as c10 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d686 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d686;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["Dimensions"]:c2(),["SharedCodec224"]:c3(),["SharedCodec225"]:c4(),["SharedCodec226"]:c5(),["SharedCodec227"]:c6(),["SharedCodec228"]:c7(),["SharedCodec229"]:c8(),["SharedCodec230"]:c9(),["Weight"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
