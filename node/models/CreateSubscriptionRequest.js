import { d6020 as c0, d6018 as c7, d6019 as c8 } from '../descriptors/data/271.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8719 as c1 } from '../descriptors/data/428.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6692 as c2 } from '../descriptors/data/308.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5918 as c3 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6119 as c4, d6120 as c5, d6121 as c6 } from '../descriptors/data/277.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7541 as c9, d7543 as c33 } from '../descriptors/data/359.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6127 as c10, d6128 as c11, d6136 as c22, d6137 as c23 } from '../descriptors/data/278.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8738 as c12, d8739 as c13, d8740 as c16, d8741 as c17, d8742 as c18, d8743 as c19, d8744 as c20 } from '../descriptors/data/429.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7462 as c14, d7463 as c15, d7464 as c32 } from '../descriptors/data/355.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8745 as c21, d8746 as c24, d8747 as c25, d8748 as c26, d8749 as c27, d8750 as c28, d8751 as c29, d8752 as c30, d8753 as c31, d8754 as c34, d8756 as c35, d8757 as c36, d8758 as c37, d8759 as c38 } from '../descriptors/data/430.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8719 as d8719 } from '../descriptors/data/428.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8719;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["MetadataRequest"]:c3(),["PromotionRefInputPromotionCode"]:c4(),["PromotionRefInputPromotionID"]:c5(),["PromotionRefRequest"]:c6(),["SharedCodec0"]:c7(),["SharedCodec1"]:c8(),["SharedCodec103"]:c9(),["SharedCodec151"]:c10(),["SharedCodec152"]:c11(),["SharedCodec1572"]:c12(),["SharedCodec1573"]:c13(),["SharedCodec1587"]:c14(),["SharedCodec1588"]:c15(),["SharedCodec1645"]:c16(),["SharedCodec1646"]:c17(),["SharedCodec1647"]:c18(),["SharedCodec1648"]:c19(),["SharedCodec1649"]:c20(),["SharedCodec1650"]:c21(),["SharedCodec176"]:c22(),["SharedCodec177"]:c23(),["SharedCodec439"]:c24(),["SharedCodec440"]:c25(),["SharedCodec441"]:c26(),["SharedCodec442"]:c27(),["SharedCodec443"]:c28(),["SharedCodec444"]:c29(),["SubscriptionBillingScheduleRequest"]:c30(),["SubscriptionBillingStartRequest"]:c31(),["SubscriptionDeliveryDestinationRequest"]:c32(),["SubscriptionDeliveryRequest"]:c33(),["SubscriptionOfferLineItemRequest"]:c34(),["SubscriptionPromotionRequest"]:c35(),["SubscriptionServiceLocationRequest"]:c36(),["SubscriptionTaxRequest"]:c37(),["SubscriptionTermsRequest"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
