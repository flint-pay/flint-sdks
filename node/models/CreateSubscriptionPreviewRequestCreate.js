import { d7867 as c0, d7865 as c9, d7866 as c22 } from '../descriptors/data/342.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d411 as c1 } from '../descriptors/data/25.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10575 as c2 } from '../descriptors/data/499.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8551 as c3 } from '../descriptors/data/379.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7767 as c4 } from '../descriptors/data/336.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7968 as c5, d7969 as c6, d7970 as c7, d7976 as c10, d7977 as c11, d7986 as c23 } from '../descriptors/data/348.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9394 as c8, d9396 as c34 } from '../descriptors/data/430.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10594 as c12, d10595 as c13, d10596 as c16, d10597 as c17, d10598 as c18, d10599 as c19, d10600 as c20, d10601 as c21, d10602 as c25, d10603 as c26, d10604 as c27, d10605 as c28, d10606 as c29, d10607 as c30, d10608 as c31, d10609 as c32, d10610 as c35, d10611 as c37, d10612 as c38, d10613 as c39 } from '../descriptors/data/501.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9314 as c14, d9315 as c15, d9316 as c33 } from '../descriptors/data/426.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7987 as c24, d7988 as c36 } from '../descriptors/data/349.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10614 as c40 } from '../descriptors/data/502.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d411 as d411 } from '../descriptors/data/25.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d411;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionPreviewRequestCreate"]:c1(),["CreateSubscriptionRequest"]:c2(),["DeliverySelectionRecipientRequest"]:c3(),["MetadataRequest"]:c4(),["PromotionRefInputPromotionCode"]:c5(),["PromotionRefInputPromotionID"]:c6(),["PromotionRefRequest"]:c7(),["SharedCodec166"]:c8(),["SharedCodec2"]:c9(),["SharedCodec227"]:c10(),["SharedCodec228"]:c11(),["SharedCodec2782"]:c12(),["SharedCodec2783"]:c13(),["SharedCodec2798"]:c14(),["SharedCodec2799"]:c15(),["SharedCodec2881"]:c16(),["SharedCodec2882"]:c17(),["SharedCodec2884"]:c18(),["SharedCodec2885"]:c19(),["SharedCodec2886"]:c20(),["SharedCodec2887"]:c21(),["SharedCodec3"]:c22(),["SharedCodec307"]:c23(),["SharedCodec308"]:c24(),["SharedCodec584"]:c25(),["SharedCodec585"]:c26(),["SharedCodec586"]:c27(),["SharedCodec587"]:c28(),["SharedCodec588"]:c29(),["SharedCodec589"]:c30(),["SubscriptionBillingScheduleRequest"]:c31(),["SubscriptionBillingStartRequest"]:c32(),["SubscriptionDeliveryDestinationRequest"]:c33(),["SubscriptionDeliveryRequest"]:c34(),["SubscriptionOfferLineItemRequest"]:c35(),["SubscriptionPlanChangeLineItemRequest"]:c36(),["SubscriptionPromotionRequest"]:c37(),["SubscriptionServiceLocationRequest"]:c38(),["SubscriptionTaxRequest"]:c39(),["SubscriptionTermsRequest"]:c40()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestCreate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
