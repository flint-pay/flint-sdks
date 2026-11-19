import { d1770 as c0 } from '../descriptors/data/87.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10213 as c1 } from '../descriptors/data/476.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8715 as c2, d8716 as c3 } from '../descriptors/data/388.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1770 as d1770 } from '../descriptors/data/87.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1770;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResolvePaymentLinkLineItemModifierInputText"]:c0(),["ResolvePaymentLinkTextModifierRequest"]:c1(),["SharedCodec484"]:c2(),["SharedCodec485"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolvePaymentLinkLineItemModifierInputText(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
