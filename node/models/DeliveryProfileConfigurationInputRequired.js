import { d643 as c0 } from '../descriptors/data/36.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8747 as c1, d8758 as c2, d8759 as c3, d8762 as c4, d8763 as c5, d8764 as c6 } from '../descriptors/data/391.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8767 as c7, d8768 as c8, d8769 as c9, d8770 as c10, d8771 as c11 } from '../descriptors/data/392.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d643 as d643 } from '../descriptors/data/36.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d643;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputRequired"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec974"]:c2(),["SharedCodec975"]:c3(),["SharedCodec978"]:c4(),["SharedCodec979"]:c5(),["SharedCodec980"]:c6(),["SharedCodec991"]:c7(),["SharedCodec992"]:c8(),["SharedCodec994"]:c9(),["SharedCodec995"]:c10(),["SharedCodec996"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputRequired(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
