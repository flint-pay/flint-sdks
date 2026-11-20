import { d8732 as c0 } from '../descriptors/data/390.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8735 as c1, d8746 as c5, d8747 as c6, d8748 as c7, d8749 as c8, d8750 as c9, d8751 as c10, d8752 as c11, d8753 as c12, d8754 as c13 } from '../descriptors/data/391.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8049 as c2 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8145 as c3 } from '../descriptors/data/358.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8481 as c4 } from '../descriptors/data/377.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8755 as c14, d8756 as c15, d8757 as c16, d8758 as c17, d8759 as c18 } from '../descriptors/data/392.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7748 as c19 } from '../descriptors/data/326.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7748 as d7748 } from '../descriptors/data/326.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7748;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec3073"]:c2(),["SharedCodec3076"]:c3(),["SharedCodec3084"]:c4(),["SharedCodec969"]:c5(),["SharedCodec970"]:c6(),["SharedCodec971"]:c7(),["SharedCodec972"]:c8(),["SharedCodec973"]:c9(),["SharedCodec974"]:c10(),["SharedCodec975"]:c11(),["SharedCodec982"]:c12(),["SharedCodec983"]:c13(),["SharedCodec986"]:c14(),["SharedCodec987"]:c15(),["SharedCodec989"]:c16(),["SharedCodec990"]:c17(),["SharedCodec991"]:c18(),["UpdateDeliveryProfileRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
