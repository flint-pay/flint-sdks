import { d8265 as c0, d8262 as c2, d8259 as c7, d8260 as c8, d8270 as c12, d8271 as c13, d8272 as c17 } from '../descriptors/data/365.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10201 as c1 } from '../descriptors/data/476.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10214 as c3, d10215 as c4, d10216 as c6 } from '../descriptors/data/477.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1771 as c5 } from '../descriptors/data/87.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10265 as c9 } from '../descriptors/data/482.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10244 as c10, d10245 as c11 } from '../descriptors/data/480.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8716 as c14, d8717 as c15, d8718 as c16 } from '../descriptors/data/390.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1771 as d1771 } from '../descriptors/data/87.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1771;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutSubscriptionTermsRequest"]:c0(),["PaymentLinkResolvePrefillRequest"]:c1(),["PlatformFeeMoney"]:c2(),["ResolvePaymentLinkLineItemModifierRequest"]:c3(),["ResolvePaymentLinkLineItemModifiers"]:c4(),["ResolvePaymentLinkRequest"]:c5(),["ResolvePaymentLinkTextModifierRequest"]:c6(),["SharedCodec232"]:c7(),["SharedCodec233"]:c8(),["SharedCodec2416"]:c9(),["SharedCodec2611"]:c10(),["SharedCodec2612"]:c11(),["SharedCodec314"]:c12(),["SharedCodec315"]:c13(),["SharedCodec482"]:c14(),["SharedCodec484"]:c15(),["SharedCodec485"]:c16(),["SubscriptionPlanChangeLineItemRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolvePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
