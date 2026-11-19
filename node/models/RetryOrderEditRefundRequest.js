import { d9895 as c0 } from '../descriptors/data/459.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1780 as c1 } from '../descriptors/data/88.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1780 as d1780 } from '../descriptors/data/88.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1780;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RefundDestinations"]:c0(),["RetryOrderEditRefundRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRetryOrderEditRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
