import { d3658 as c0, d3669 as c1, d3670 as c2, d3671 as c3, d3672 as c4, d3673 as c5 } from '../descriptors/data/151.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3658 as d3658 } from '../descriptors/data/151.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3658;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileOriginPolicyRequest"]:c0(),["SharedCodec309"]:c1(),["SharedCodec310"]:c2(),["SharedCodec311"]:c3(),["SharedCodec312"]:c4(),["SharedCodec313"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileOriginPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
