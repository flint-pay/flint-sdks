import { d5981 as c0, d5979 as c7, d5980 as c8 } from '../descriptors/data/269.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8678 as c1 } from '../descriptors/data/424.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6655 as c2 } from '../descriptors/data/305.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5893 as c3 } from '../descriptors/data/264.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6076 as c4, d6077 as c5, d6078 as c6, d6083 as c10 } from '../descriptors/data/274.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7503 as c9, d7505 as c33 } from '../descriptors/data/356.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6084 as c11, d6092 as c22, d6093 as c23 } from '../descriptors/data/275.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8697 as c12, d8698 as c13, d8699 as c16, d8700 as c17, d8701 as c18, d8702 as c19, d8703 as c20 } from '../descriptors/data/425.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7424 as c14, d7425 as c15, d7426 as c32 } from '../descriptors/data/352.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8704 as c21, d8705 as c24, d8706 as c25, d8707 as c26, d8708 as c27, d8709 as c28, d8710 as c29, d8711 as c30, d8712 as c31, d8713 as c34, d8715 as c35, d8716 as c36, d8717 as c37, d8718 as c38 } from '../descriptors/data/426.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8678 as d8678 } from '../descriptors/data/424.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8678;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["MetadataRequest"]:c3(),["PromotionRefInputPromotionCode"]:c4(),["PromotionRefInputPromotionID"]:c5(),["PromotionRefRequest"]:c6(),["SharedCodec0"]:c7(),["SharedCodec1"]:c8(),["SharedCodec102"]:c9(),["SharedCodec150"]:c10(),["SharedCodec151"]:c11(),["SharedCodec1570"]:c12(),["SharedCodec1571"]:c13(),["SharedCodec1585"]:c14(),["SharedCodec1586"]:c15(),["SharedCodec1643"]:c16(),["SharedCodec1644"]:c17(),["SharedCodec1645"]:c18(),["SharedCodec1646"]:c19(),["SharedCodec1647"]:c20(),["SharedCodec1648"]:c21(),["SharedCodec175"]:c22(),["SharedCodec176"]:c23(),["SharedCodec437"]:c24(),["SharedCodec438"]:c25(),["SharedCodec439"]:c26(),["SharedCodec440"]:c27(),["SharedCodec441"]:c28(),["SharedCodec442"]:c29(),["SubscriptionBillingScheduleRequest"]:c30(),["SubscriptionBillingStartRequest"]:c31(),["SubscriptionDeliveryDestinationRequest"]:c32(),["SubscriptionDeliveryRequest"]:c33(),["SubscriptionOfferLineItemRequest"]:c34(),["SubscriptionPromotionRequest"]:c35(),["SubscriptionServiceLocationRequest"]:c36(),["SubscriptionTaxRequest"]:c37(),["SubscriptionTermsRequest"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
