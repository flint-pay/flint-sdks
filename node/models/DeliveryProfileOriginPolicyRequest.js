import { d8735 as c0 } from '../descriptors/data/391.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8755 as c1, d8756 as c2, d8757 as c3, d8758 as c4, d8759 as c5 } from '../descriptors/data/392.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8735 as d8735 } from '../descriptors/data/391.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8735;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileOriginPolicyRequest"]:c0(),["SharedCodec986"]:c1(),["SharedCodec987"]:c2(),["SharedCodec989"]:c3(),["SharedCodec990"]:c4(),["SharedCodec991"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileOriginPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
