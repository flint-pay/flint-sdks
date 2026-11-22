import { d8158 as c0, d8156 as c3, d8157 as c8 } from '../descriptors/data/359.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d328 as c1 } from '../descriptors/data/17.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8884 as c2 } from '../descriptors/data/398.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8269 as c4, d8270 as c5 } from '../descriptors/data/365.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9652 as c6, d9653 as c7, d9654 as c14, d9639 as c17 } from '../descriptors/data/444.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9631 as c9, d9632 as c10, d9633 as c11, d9634 as c12, d9635 as c13 } from '../descriptors/data/443.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9746 as c15, d9748 as c16 } from '../descriptors/data/450.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d328 as d328 } from '../descriptors/data/17.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d328;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateMeSubscriptionPreviewRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["SharedCodec2"]:c3(),["SharedCodec233"]:c4(),["SharedCodec234"]:c5(),["SharedCodec2901"]:c6(),["SharedCodec2902"]:c7(),["SharedCodec3"]:c8(),["SharedCodec473"]:c9(),["SharedCodec474"]:c10(),["SharedCodec475"]:c11(),["SharedCodec476"]:c12(),["SharedCodec477"]:c13(),["SubscriptionDeliveryDestinationRequest"]:c14(),["SubscriptionDeliveryRequest"]:c15(),["SubscriptionQuantityChangeLineItemRequest"]:c16(),["SubscriptionSwapPreviewRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeSubscriptionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
