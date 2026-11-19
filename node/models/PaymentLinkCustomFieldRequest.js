import { d10182 as c0 } from '../descriptors/data/474.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10182 as d10182 } from '../descriptors/data/474.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10182;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkCustomFieldRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkCustomFieldRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
