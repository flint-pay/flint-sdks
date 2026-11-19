import { d8257 as c0, d8258 as c1, d8270 as c5 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10977 as c2, d10978 as c3, d10987 as c4, d10991 as c6 } from '../descriptors/data/523.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10991 as d10991 } from '../descriptors/data/523.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10991;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec232"]:c0(),["SharedCodec233"]:c1(),["SharedCodec2980"]:c2(),["SharedCodec2981"]:c3(),["SubscriptionOfferLineItemRequest"]:c4(),["SubscriptionPlanChangeLineItemRequest"]:c5(),["SubscriptionTermsRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionTermsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
