import { d641 as c0 } from '../descriptors/data/36.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8747 as c1, d8760 as c2, d8761 as c3 } from '../descriptors/data/391.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8767 as c4, d8768 as c5, d8769 as c6, d8770 as c7, d8771 as c8 } from '../descriptors/data/392.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d641 as d641 } from '../descriptors/data/36.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d641;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputNone"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec976"]:c2(),["SharedCodec977"]:c3(),["SharedCodec991"]:c4(),["SharedCodec992"]:c5(),["SharedCodec994"]:c6(),["SharedCodec995"]:c7(),["SharedCodec996"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputNone(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
