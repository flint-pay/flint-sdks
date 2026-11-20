import { d640 as c0 } from '../descriptors/data/36.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8735 as c1, d8746 as c2, d8747 as c3 } from '../descriptors/data/391.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8755 as c4, d8756 as c5, d8757 as c6, d8758 as c7, d8759 as c8 } from '../descriptors/data/392.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d640 as d640 } from '../descriptors/data/36.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d640;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputManual"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec969"]:c2(),["SharedCodec970"]:c3(),["SharedCodec986"]:c4(),["SharedCodec987"]:c5(),["SharedCodec989"]:c6(),["SharedCodec990"]:c7(),["SharedCodec991"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputManual(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
