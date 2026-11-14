import { d6021 as c0, d6019 as c8, d6020 as c9 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d381 as c1 } from '../descriptors/data/24.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8727 as c2 } from '../descriptors/data/431.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6693 as c3 } from '../descriptors/data/311.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c4 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6120 as c5, d6121 as c6 } from '../descriptors/data/280.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6122 as c7, d6128 as c11, d6129 as c12, d6137 as c23, d6138 as c24 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7542 as c10, d7544 as c34 } from '../descriptors/data/362.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8746 as c13, d8747 as c14, d8748 as c17, d8749 as c18, d8750 as c19, d8751 as c20, d8752 as c21 } from '../descriptors/data/432.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7460 as c15, d7461 as c16, d7462 as c33 } from '../descriptors/data/358.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8753 as c22, d8754 as c25, d8755 as c26, d8756 as c27, d8757 as c28, d8758 as c29, d8759 as c30, d8760 as c31, d8761 as c32, d8762 as c35, d8764 as c36, d8765 as c37, d8766 as c38, d8767 as c39 } from '../descriptors/data/433.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d381 as d381 } from '../descriptors/data/24.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d381;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionPreviewRequestCreate"]:c1(),["CreateSubscriptionRequest"]:c2(),["DeliverySelectionRecipientRequest"]:c3(),["MetadataRequest"]:c4(),["PromotionRefInputPromotionCode"]:c5(),["PromotionRefInputPromotionID"]:c6(),["PromotionRefRequest"]:c7(),["SharedCodec0"]:c8(),["SharedCodec1"]:c9(),["SharedCodec102"]:c10(),["SharedCodec150"]:c11(),["SharedCodec151"]:c12(),["SharedCodec1567"]:c13(),["SharedCodec1568"]:c14(),["SharedCodec1582"]:c15(),["SharedCodec1583"]:c16(),["SharedCodec1640"]:c17(),["SharedCodec1641"]:c18(),["SharedCodec1642"]:c19(),["SharedCodec1643"]:c20(),["SharedCodec1644"]:c21(),["SharedCodec1645"]:c22(),["SharedCodec174"]:c23(),["SharedCodec175"]:c24(),["SharedCodec443"]:c25(),["SharedCodec444"]:c26(),["SharedCodec445"]:c27(),["SharedCodec446"]:c28(),["SharedCodec447"]:c29(),["SharedCodec448"]:c30(),["SubscriptionBillingScheduleRequest"]:c31(),["SubscriptionBillingStartRequest"]:c32(),["SubscriptionDeliveryDestinationRequest"]:c33(),["SubscriptionDeliveryRequest"]:c34(),["SubscriptionOfferLineItemRequest"]:c35(),["SubscriptionPromotionRequest"]:c36(),["SubscriptionServiceLocationRequest"]:c37(),["SubscriptionTaxRequest"]:c38(),["SubscriptionTermsRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestCreate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
