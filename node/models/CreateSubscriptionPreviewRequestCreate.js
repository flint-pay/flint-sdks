import { d6011 as c0, d6009 as c8, d6010 as c9 } from '../descriptors/data/273.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d377 as c1 } from '../descriptors/data/24.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8715 as c2 } from '../descriptors/data/429.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6701 as c3 } from '../descriptors/data/311.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5911 as c4 } from '../descriptors/data/267.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6112 as c5, d6113 as c6, d6114 as c7, d6120 as c10, d6121 as c11 } from '../descriptors/data/279.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8734 as c12, d8735 as c13, d8736 as c16, d8737 as c17, d8738 as c18, d8739 as c19, d8740 as c20, d8741 as c21, d8742 as c24, d8743 as c25, d8744 as c26, d8745 as c27, d8746 as c28, d8747 as c29, d8748 as c31, d8749 as c32, d8750 as c35, d8751 as c37, d8752 as c38, d8753 as c39 } from '../descriptors/data/431.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7457 as c14, d7458 as c15, d7459 as c33 } from '../descriptors/data/356.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6130 as c22, d6131 as c23, d6132 as c36 } from '../descriptors/data/280.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7537 as c30, d7539 as c34 } from '../descriptors/data/360.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8754 as c40 } from '../descriptors/data/432.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d377 as d377 } from '../descriptors/data/24.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d377;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionPreviewRequestCreate"]:c1(),["CreateSubscriptionRequest"]:c2(),["DeliverySelectionRecipientRequest"]:c3(),["MetadataRequest"]:c4(),["PromotionRefInputPromotionCode"]:c5(),["PromotionRefInputPromotionID"]:c6(),["PromotionRefRequest"]:c7(),["SharedCodec0"]:c8(),["SharedCodec1"]:c9(),["SharedCodec145"]:c10(),["SharedCodec146"]:c11(),["SharedCodec1555"]:c12(),["SharedCodec1556"]:c13(),["SharedCodec1570"]:c14(),["SharedCodec1571"]:c15(),["SharedCodec1628"]:c16(),["SharedCodec1629"]:c17(),["SharedCodec1630"]:c18(),["SharedCodec1631"]:c19(),["SharedCodec1632"]:c20(),["SharedCodec1633"]:c21(),["SharedCodec169"]:c22(),["SharedCodec170"]:c23(),["SharedCodec437"]:c24(),["SharedCodec438"]:c25(),["SharedCodec439"]:c26(),["SharedCodec440"]:c27(),["SharedCodec441"]:c28(),["SharedCodec442"]:c29(),["SharedCodec97"]:c30(),["SubscriptionBillingScheduleRequest"]:c31(),["SubscriptionBillingStartRequest"]:c32(),["SubscriptionDeliveryDestinationRequest"]:c33(),["SubscriptionDeliveryRequest"]:c34(),["SubscriptionOfferLineItemRequest"]:c35(),["SubscriptionPlanChangeLineItemRequest"]:c36(),["SubscriptionPromotionRequest"]:c37(),["SubscriptionServiceLocationRequest"]:c38(),["SubscriptionTaxRequest"]:c39(),["SubscriptionTermsRequest"]:c40()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestCreate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
