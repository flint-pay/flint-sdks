import { d8263 as c0, d8260 as c2, d8257 as c7, d8258 as c8, d8268 as c12, d8269 as c13, d8270 as c17 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10198 as c1 } from '../descriptors/data/475.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10211 as c3, d10212 as c4, d10213 as c6 } from '../descriptors/data/476.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1771 as c5 } from '../descriptors/data/87.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10262 as c9 } from '../descriptors/data/481.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10241 as c10, d10242 as c11 } from '../descriptors/data/479.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8714 as c14, d8715 as c15, d8716 as c16 } from '../descriptors/data/388.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1771 as d1771 } from '../descriptors/data/87.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1771;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutSubscriptionTermsRequest"]:c0(),["PaymentLinkResolvePrefillRequest"]:c1(),["PlatformFeeMoney"]:c2(),["ResolvePaymentLinkLineItemModifierRequest"]:c3(),["ResolvePaymentLinkLineItemModifiers"]:c4(),["ResolvePaymentLinkRequest"]:c5(),["ResolvePaymentLinkTextModifierRequest"]:c6(),["SharedCodec232"]:c7(),["SharedCodec233"]:c8(),["SharedCodec2416"]:c9(),["SharedCodec2611"]:c10(),["SharedCodec2612"]:c11(),["SharedCodec314"]:c12(),["SharedCodec315"]:c13(),["SharedCodec482"]:c14(),["SharedCodec484"]:c15(),["SharedCodec485"]:c16(),["SubscriptionPlanChangeLineItemRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolvePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
