import { d6021 as c0, d6019 as c7, d6020 as c8 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8727 as c1 } from '../descriptors/data/431.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6693 as c2 } from '../descriptors/data/311.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c3 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6120 as c4, d6121 as c5 } from '../descriptors/data/280.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6122 as c6, d6128 as c10, d6129 as c11, d6137 as c22, d6138 as c23 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7542 as c9, d7544 as c33 } from '../descriptors/data/362.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8746 as c12, d8747 as c13, d8748 as c16, d8749 as c17, d8750 as c18, d8751 as c19, d8752 as c20 } from '../descriptors/data/432.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7460 as c14, d7461 as c15, d7462 as c32 } from '../descriptors/data/358.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8753 as c21, d8754 as c24, d8755 as c25, d8756 as c26, d8757 as c27, d8758 as c28, d8759 as c29, d8760 as c30, d8761 as c31, d8762 as c34, d8764 as c35, d8765 as c36, d8766 as c37, d8767 as c38 } from '../descriptors/data/433.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8727 as d8727 } from '../descriptors/data/431.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8727;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["MetadataRequest"]:c3(),["PromotionRefInputPromotionCode"]:c4(),["PromotionRefInputPromotionID"]:c5(),["PromotionRefRequest"]:c6(),["SharedCodec0"]:c7(),["SharedCodec1"]:c8(),["SharedCodec102"]:c9(),["SharedCodec150"]:c10(),["SharedCodec151"]:c11(),["SharedCodec1567"]:c12(),["SharedCodec1568"]:c13(),["SharedCodec1582"]:c14(),["SharedCodec1583"]:c15(),["SharedCodec1640"]:c16(),["SharedCodec1641"]:c17(),["SharedCodec1642"]:c18(),["SharedCodec1643"]:c19(),["SharedCodec1644"]:c20(),["SharedCodec1645"]:c21(),["SharedCodec174"]:c22(),["SharedCodec175"]:c23(),["SharedCodec443"]:c24(),["SharedCodec444"]:c25(),["SharedCodec445"]:c26(),["SharedCodec446"]:c27(),["SharedCodec447"]:c28(),["SharedCodec448"]:c29(),["SubscriptionBillingScheduleRequest"]:c30(),["SubscriptionBillingStartRequest"]:c31(),["SubscriptionDeliveryDestinationRequest"]:c32(),["SubscriptionDeliveryRequest"]:c33(),["SubscriptionOfferLineItemRequest"]:c34(),["SubscriptionPromotionRequest"]:c35(),["SubscriptionServiceLocationRequest"]:c36(),["SubscriptionTaxRequest"]:c37(),["SubscriptionTermsRequest"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
