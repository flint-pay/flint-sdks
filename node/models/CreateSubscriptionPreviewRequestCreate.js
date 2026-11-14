import { d6020 as c0, d6018 as c8, d6019 as c9 } from '../descriptors/data/271.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d382 as c1 } from '../descriptors/data/24.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8719 as c2 } from '../descriptors/data/428.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6692 as c3 } from '../descriptors/data/308.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5918 as c4 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6119 as c5, d6120 as c6, d6121 as c7 } from '../descriptors/data/277.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7541 as c10, d7543 as c34 } from '../descriptors/data/359.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6127 as c11, d6128 as c12, d6136 as c23, d6137 as c24 } from '../descriptors/data/278.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8738 as c13, d8739 as c14, d8740 as c17, d8741 as c18, d8742 as c19, d8743 as c20, d8744 as c21 } from '../descriptors/data/429.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7462 as c15, d7463 as c16, d7464 as c33 } from '../descriptors/data/355.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8745 as c22, d8746 as c25, d8747 as c26, d8748 as c27, d8749 as c28, d8750 as c29, d8751 as c30, d8752 as c31, d8753 as c32, d8754 as c35, d8756 as c36, d8757 as c37, d8758 as c38, d8759 as c39 } from '../descriptors/data/430.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d382 as d382 } from '../descriptors/data/24.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d382;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionPreviewRequestCreate"]:c1(),["CreateSubscriptionRequest"]:c2(),["DeliverySelectionRecipientRequest"]:c3(),["MetadataRequest"]:c4(),["PromotionRefInputPromotionCode"]:c5(),["PromotionRefInputPromotionID"]:c6(),["PromotionRefRequest"]:c7(),["SharedCodec0"]:c8(),["SharedCodec1"]:c9(),["SharedCodec103"]:c10(),["SharedCodec151"]:c11(),["SharedCodec152"]:c12(),["SharedCodec1572"]:c13(),["SharedCodec1573"]:c14(),["SharedCodec1587"]:c15(),["SharedCodec1588"]:c16(),["SharedCodec1645"]:c17(),["SharedCodec1646"]:c18(),["SharedCodec1647"]:c19(),["SharedCodec1648"]:c20(),["SharedCodec1649"]:c21(),["SharedCodec1650"]:c22(),["SharedCodec176"]:c23(),["SharedCodec177"]:c24(),["SharedCodec439"]:c25(),["SharedCodec440"]:c26(),["SharedCodec441"]:c27(),["SharedCodec442"]:c28(),["SharedCodec443"]:c29(),["SharedCodec444"]:c30(),["SubscriptionBillingScheduleRequest"]:c31(),["SubscriptionBillingStartRequest"]:c32(),["SubscriptionDeliveryDestinationRequest"]:c33(),["SubscriptionDeliveryRequest"]:c34(),["SubscriptionOfferLineItemRequest"]:c35(),["SubscriptionPromotionRequest"]:c36(),["SubscriptionServiceLocationRequest"]:c37(),["SubscriptionTaxRequest"]:c38(),["SubscriptionTermsRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestCreate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
