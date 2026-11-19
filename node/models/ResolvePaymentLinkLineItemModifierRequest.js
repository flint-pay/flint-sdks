import { d10211 as c0, d10213 as c1 } from '../descriptors/data/476.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10241 as c2, d10242 as c3 } from '../descriptors/data/479.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8714 as c4, d8715 as c5, d8716 as c6 } from '../descriptors/data/388.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10211 as d10211 } from '../descriptors/data/476.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10211;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResolvePaymentLinkLineItemModifierRequest"]:c0(),["ResolvePaymentLinkTextModifierRequest"]:c1(),["SharedCodec2611"]:c2(),["SharedCodec2612"]:c3(),["SharedCodec482"]:c4(),["SharedCodec484"]:c5(),["SharedCodec485"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolvePaymentLinkLineItemModifierRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
