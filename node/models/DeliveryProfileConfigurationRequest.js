import { d8732 as c0 } from '../descriptors/data/390.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8735 as c1, d8746 as c2, d8747 as c3, d8748 as c4, d8749 as c5, d8750 as c6, d8751 as c7, d8752 as c8, d8753 as c9, d8754 as c10 } from '../descriptors/data/391.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8755 as c11, d8756 as c12, d8757 as c13, d8758 as c14, d8759 as c15 } from '../descriptors/data/392.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8732 as d8732 } from '../descriptors/data/390.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8732;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec969"]:c2(),["SharedCodec970"]:c3(),["SharedCodec971"]:c4(),["SharedCodec972"]:c5(),["SharedCodec973"]:c6(),["SharedCodec974"]:c7(),["SharedCodec975"]:c8(),["SharedCodec982"]:c9(),["SharedCodec983"]:c10(),["SharedCodec986"]:c11(),["SharedCodec987"]:c12(),["SharedCodec989"]:c13(),["SharedCodec990"]:c14(),["SharedCodec991"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
