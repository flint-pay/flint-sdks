import { d8257 as c0, d8258 as c1, d8270 as c2 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7638 as c3 } from '../descriptors/data/320.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7638 as d7638 } from '../descriptors/data/320.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7638;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec232"]:c0(),["SharedCodec233"]:c1(),["SubscriptionPlanChangeLineItemRequest"]:c2(),["SubscriptionPlanTermsRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanTermsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
