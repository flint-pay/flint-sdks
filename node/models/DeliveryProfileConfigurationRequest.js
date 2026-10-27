import { d3655 as c0, d3658 as c1, d3664 as c2, d3665 as c3, d3666 as c4, d3667 as c5, d3668 as c6, d3669 as c7, d3670 as c8, d3671 as c9, d3672 as c10, d3673 as c11 } from '../descriptors/data/151.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3655 as d3655 } from '../descriptors/data/151.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3655;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec304"]:c2(),["SharedCodec305"]:c3(),["SharedCodec306"]:c4(),["SharedCodec307"]:c5(),["SharedCodec308"]:c6(),["SharedCodec309"]:c7(),["SharedCodec310"]:c8(),["SharedCodec311"]:c9(),["SharedCodec312"]:c10(),["SharedCodec313"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
