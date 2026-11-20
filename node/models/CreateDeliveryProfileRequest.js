import { d274 as c0 } from '../descriptors/data/13.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8732 as c1 } from '../descriptors/data/390.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8735 as c2, d8746 as c4, d8747 as c5, d8748 as c6, d8749 as c7, d8750 as c8, d8751 as c9, d8752 as c10, d8753 as c11, d8754 as c12 } from '../descriptors/data/391.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8048 as c3 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8755 as c13, d8756 as c14, d8757 as c15, d8758 as c16, d8759 as c17 } from '../descriptors/data/392.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d274 as d274 } from '../descriptors/data/13.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d274;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["MetadataRequest"]:c3(),["SharedCodec969"]:c4(),["SharedCodec970"]:c5(),["SharedCodec971"]:c6(),["SharedCodec972"]:c7(),["SharedCodec973"]:c8(),["SharedCodec974"]:c9(),["SharedCodec975"]:c10(),["SharedCodec982"]:c11(),["SharedCodec983"]:c12(),["SharedCodec986"]:c13(),["SharedCodec987"]:c14(),["SharedCodec989"]:c15(),["SharedCodec990"]:c16(),["SharedCodec991"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
