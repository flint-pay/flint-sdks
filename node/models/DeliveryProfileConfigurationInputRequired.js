import { d643 as c0 } from '../descriptors/data/36.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8735 as c1, d8746 as c2, d8747 as c3, d8750 as c4, d8751 as c5, d8752 as c6 } from '../descriptors/data/391.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8755 as c7, d8756 as c8, d8757 as c9, d8758 as c10, d8759 as c11 } from '../descriptors/data/392.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d643 as d643 } from '../descriptors/data/36.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d643;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputRequired"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec969"]:c2(),["SharedCodec970"]:c3(),["SharedCodec973"]:c4(),["SharedCodec974"]:c5(),["SharedCodec975"]:c6(),["SharedCodec986"]:c7(),["SharedCodec987"]:c8(),["SharedCodec989"]:c9(),["SharedCodec990"]:c10(),["SharedCodec991"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputRequired(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
