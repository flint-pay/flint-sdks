import { d6021 as c0, d6019 as c3, d6020 as c4 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d290 as c1 } from '../descriptors/data/16.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6693 as c2 } from '../descriptors/data/311.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7460 as c5, d7461 as c6, d7462 as c7 } from '../descriptors/data/358.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7544 as c8 } from '../descriptors/data/362.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7448 as c9 } from '../descriptors/data/357.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d290 as d290 } from '../descriptors/data/16.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d290;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateMeSubscriptionPreviewRequestNextRenewal"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["SharedCodec0"]:c3(),["SharedCodec1"]:c4(),["SharedCodec1582"]:c5(),["SharedCodec1583"]:c6(),["SubscriptionDeliveryDestinationRequest"]:c7(),["SubscriptionDeliveryRequest"]:c8(),["SubscriptionSwapPreviewRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeSubscriptionPreviewRequestNextRenewal(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
