import { d275 as c0 } from '../descriptors/data/13.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8744 as c1 } from '../descriptors/data/390.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8747 as c2, d8758 as c4, d8759 as c5, d8760 as c6, d8761 as c7, d8762 as c8, d8763 as c9, d8764 as c10, d8765 as c11, d8766 as c12 } from '../descriptors/data/391.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8056 as c3 } from '../descriptors/data/352.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8767 as c13, d8768 as c14, d8769 as c15, d8770 as c16, d8771 as c17 } from '../descriptors/data/392.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d275 as d275 } from '../descriptors/data/13.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d275;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["MetadataRequest"]:c3(),["SharedCodec974"]:c4(),["SharedCodec975"]:c5(),["SharedCodec976"]:c6(),["SharedCodec977"]:c7(),["SharedCodec978"]:c8(),["SharedCodec979"]:c9(),["SharedCodec980"]:c10(),["SharedCodec987"]:c11(),["SharedCodec988"]:c12(),["SharedCodec991"]:c13(),["SharedCodec992"]:c14(),["SharedCodec994"]:c15(),["SharedCodec995"]:c16(),["SharedCodec996"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
