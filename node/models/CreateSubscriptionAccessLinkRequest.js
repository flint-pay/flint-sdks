import { d412 as c0 } from '../descriptors/data/25.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d412 as d412 } from '../descriptors/data/25.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d412;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionAccessLinkRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionAccessLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
