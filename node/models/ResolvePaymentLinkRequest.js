import { d8275 as c0, d8272 as c2, d8269 as c7, d8270 as c8 } from '../descriptors/data/365.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10213 as c1 } from '../descriptors/data/475.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10226 as c3, d10227 as c4, d10228 as c6 } from '../descriptors/data/476.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d1771 as c5 } from '../descriptors/data/87.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10278 as c9 } from '../descriptors/data/481.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10256 as c10, d10257 as c11 } from '../descriptors/data/479.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8280 as c12, d8281 as c13, d8282 as c17 } from '../descriptors/data/366.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8728 as c14, d8729 as c15, d8730 as c16 } from '../descriptors/data/390.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d1771 as d1771 } from '../descriptors/data/87.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1771;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutSubscriptionTermsRequest"]:c0(),["PaymentLinkResolvePrefillRequest"]:c1(),["PlatformFeeMoney"]:c2(),["ResolvePaymentLinkLineItemModifierRequest"]:c3(),["ResolvePaymentLinkLineItemModifiers"]:c4(),["ResolvePaymentLinkRequest"]:c5(),["ResolvePaymentLinkTextModifierRequest"]:c6(),["SharedCodec233"]:c7(),["SharedCodec234"]:c8(),["SharedCodec2421"]:c9(),["SharedCodec2616"]:c10(),["SharedCodec2617"]:c11(),["SharedCodec316"]:c12(),["SharedCodec317"]:c13(),["SharedCodec486"]:c14(),["SharedCodec488"]:c15(),["SharedCodec489"]:c16(),["SubscriptionPlanChangeLineItemRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolvePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
