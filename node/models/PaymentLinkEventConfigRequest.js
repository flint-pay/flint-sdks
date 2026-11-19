import { d10187 as c0 } from '../descriptors/data/474.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10187 as d10187 } from '../descriptors/data/474.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10187;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkEventConfigRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkEventConfigRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
