import { d6011 as c0, d6009 as c7, d6010 as c8 } from '../descriptors/data/273.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8715 as c1 } from '../descriptors/data/429.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6701 as c2 } from '../descriptors/data/311.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5911 as c3 } from '../descriptors/data/267.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6112 as c4, d6113 as c5, d6114 as c6, d6120 as c9, d6121 as c10 } from '../descriptors/data/279.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8734 as c11, d8735 as c12, d8736 as c15, d8737 as c16, d8738 as c17, d8739 as c18, d8740 as c19, d8741 as c20, d8742 as c23, d8743 as c24, d8744 as c25, d8745 as c26, d8746 as c27, d8747 as c28, d8748 as c30, d8749 as c31, d8750 as c34, d8751 as c36, d8752 as c37, d8753 as c38 } from '../descriptors/data/431.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7457 as c13, d7458 as c14, d7459 as c32 } from '../descriptors/data/356.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6130 as c21, d6131 as c22, d6132 as c35 } from '../descriptors/data/280.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7537 as c29, d7539 as c33 } from '../descriptors/data/360.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8754 as c39 } from '../descriptors/data/432.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8715 as d8715 } from '../descriptors/data/429.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8715;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["MetadataRequest"]:c3(),["PromotionRefInputPromotionCode"]:c4(),["PromotionRefInputPromotionID"]:c5(),["PromotionRefRequest"]:c6(),["SharedCodec0"]:c7(),["SharedCodec1"]:c8(),["SharedCodec145"]:c9(),["SharedCodec146"]:c10(),["SharedCodec1555"]:c11(),["SharedCodec1556"]:c12(),["SharedCodec1570"]:c13(),["SharedCodec1571"]:c14(),["SharedCodec1628"]:c15(),["SharedCodec1629"]:c16(),["SharedCodec1630"]:c17(),["SharedCodec1631"]:c18(),["SharedCodec1632"]:c19(),["SharedCodec1633"]:c20(),["SharedCodec169"]:c21(),["SharedCodec170"]:c22(),["SharedCodec437"]:c23(),["SharedCodec438"]:c24(),["SharedCodec439"]:c25(),["SharedCodec440"]:c26(),["SharedCodec441"]:c27(),["SharedCodec442"]:c28(),["SharedCodec97"]:c29(),["SubscriptionBillingScheduleRequest"]:c30(),["SubscriptionBillingStartRequest"]:c31(),["SubscriptionDeliveryDestinationRequest"]:c32(),["SubscriptionDeliveryRequest"]:c33(),["SubscriptionOfferLineItemRequest"]:c34(),["SubscriptionPlanChangeLineItemRequest"]:c35(),["SubscriptionPromotionRequest"]:c36(),["SubscriptionServiceLocationRequest"]:c37(),["SubscriptionTaxRequest"]:c38(),["SubscriptionTermsRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
