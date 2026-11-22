import { d8158 as c0, d8156 as c2, d8157 as c5 } from '../descriptors/data/359.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d329 as c1 } from '../descriptors/data/17.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9652 as c3, d9653 as c4, d9654 as c6 } from '../descriptors/data/444.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d329 as d329 } from '../descriptors/data/17.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d329;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateMeSubscriptionPreviewRequestDeliveryOptions"]:c1(),["SharedCodec2"]:c2(),["SharedCodec2901"]:c3(),["SharedCodec2902"]:c4(),["SharedCodec3"]:c5(),["SubscriptionDeliveryDestinationRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeSubscriptionPreviewRequestDeliveryOptions(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
