import { d7867 as c0, d7865 as c8, d7866 as c21 } from '../descriptors/data/342.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10575 as c1 } from '../descriptors/data/499.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8551 as c2 } from '../descriptors/data/379.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7767 as c3 } from '../descriptors/data/336.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7968 as c4, d7969 as c5, d7970 as c6, d7976 as c9, d7977 as c10, d7986 as c22 } from '../descriptors/data/348.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9394 as c7, d9396 as c33 } from '../descriptors/data/430.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10594 as c11, d10595 as c12, d10596 as c15, d10597 as c16, d10598 as c17, d10599 as c18, d10600 as c19, d10601 as c20, d10602 as c24, d10603 as c25, d10604 as c26, d10605 as c27, d10606 as c28, d10607 as c29, d10608 as c30, d10609 as c31, d10610 as c34, d10611 as c36, d10612 as c37, d10613 as c38 } from '../descriptors/data/501.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9314 as c13, d9315 as c14, d9316 as c32 } from '../descriptors/data/426.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7987 as c23, d7988 as c35 } from '../descriptors/data/349.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10614 as c39 } from '../descriptors/data/502.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10575 as d10575 } from '../descriptors/data/499.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10575;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["MetadataRequest"]:c3(),["PromotionRefInputPromotionCode"]:c4(),["PromotionRefInputPromotionID"]:c5(),["PromotionRefRequest"]:c6(),["SharedCodec166"]:c7(),["SharedCodec2"]:c8(),["SharedCodec227"]:c9(),["SharedCodec228"]:c10(),["SharedCodec2782"]:c11(),["SharedCodec2783"]:c12(),["SharedCodec2798"]:c13(),["SharedCodec2799"]:c14(),["SharedCodec2881"]:c15(),["SharedCodec2882"]:c16(),["SharedCodec2884"]:c17(),["SharedCodec2885"]:c18(),["SharedCodec2886"]:c19(),["SharedCodec2887"]:c20(),["SharedCodec3"]:c21(),["SharedCodec307"]:c22(),["SharedCodec308"]:c23(),["SharedCodec584"]:c24(),["SharedCodec585"]:c25(),["SharedCodec586"]:c26(),["SharedCodec587"]:c27(),["SharedCodec588"]:c28(),["SharedCodec589"]:c29(),["SubscriptionBillingScheduleRequest"]:c30(),["SubscriptionBillingStartRequest"]:c31(),["SubscriptionDeliveryDestinationRequest"]:c32(),["SubscriptionDeliveryRequest"]:c33(),["SubscriptionOfferLineItemRequest"]:c34(),["SubscriptionPlanChangeLineItemRequest"]:c35(),["SubscriptionPromotionRequest"]:c36(),["SubscriptionServiceLocationRequest"]:c37(),["SubscriptionTaxRequest"]:c38(),["SubscriptionTermsRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
