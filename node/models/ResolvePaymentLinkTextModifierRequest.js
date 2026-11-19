import { d10213 as c0 } from '../descriptors/data/476.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7976 as c1 } from '../descriptors/data/346.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10213 as d10213 } from '../descriptors/data/476.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10213;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResolvePaymentLinkTextModifierRequest"]:c0(),["TextModifierRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolvePaymentLinkTextModifierRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
