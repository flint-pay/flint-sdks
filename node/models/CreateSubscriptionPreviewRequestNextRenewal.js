import { d8146 as c0, d8144 as c3, d8145 as c6 } from '../descriptors/data/357.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d423 as c1 } from '../descriptors/data/26.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8870 as c2 } from '../descriptors/data/397.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9637 as c4, d9638 as c5, d9639 as c7 } from '../descriptors/data/443.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9731 as c8, d9733 as c9 } from '../descriptors/data/449.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d423 as d423 } from '../descriptors/data/26.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d423;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionPreviewRequestNextRenewal"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["SharedCodec2"]:c3(),["SharedCodec2891"]:c4(),["SharedCodec2892"]:c5(),["SharedCodec3"]:c6(),["SubscriptionDeliveryDestinationRequest"]:c7(),["SubscriptionDeliveryRequest"]:c8(),["SubscriptionQuantityChangeLineItemRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestNextRenewal(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
