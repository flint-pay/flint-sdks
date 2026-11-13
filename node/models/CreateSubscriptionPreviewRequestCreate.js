import { d5981 as c0, d5979 as c8, d5980 as c9 } from '../descriptors/data/269.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d378 as c1 } from '../descriptors/data/24.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8678 as c2 } from '../descriptors/data/424.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6655 as c3 } from '../descriptors/data/305.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5893 as c4 } from '../descriptors/data/264.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6076 as c5, d6077 as c6, d6078 as c7, d6083 as c11 } from '../descriptors/data/274.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7503 as c10, d7505 as c34 } from '../descriptors/data/356.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6084 as c12, d6092 as c23, d6093 as c24 } from '../descriptors/data/275.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8697 as c13, d8698 as c14, d8699 as c17, d8700 as c18, d8701 as c19, d8702 as c20, d8703 as c21 } from '../descriptors/data/425.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7424 as c15, d7425 as c16, d7426 as c33 } from '../descriptors/data/352.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8704 as c22, d8705 as c25, d8706 as c26, d8707 as c27, d8708 as c28, d8709 as c29, d8710 as c30, d8711 as c31, d8712 as c32, d8713 as c35, d8715 as c36, d8716 as c37, d8717 as c38, d8718 as c39 } from '../descriptors/data/426.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d378 as d378 } from '../descriptors/data/24.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d378;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionPreviewRequestCreate"]:c1(),["CreateSubscriptionRequest"]:c2(),["DeliverySelectionRecipientRequest"]:c3(),["MetadataRequest"]:c4(),["PromotionRefInputPromotionCode"]:c5(),["PromotionRefInputPromotionID"]:c6(),["PromotionRefRequest"]:c7(),["SharedCodec0"]:c8(),["SharedCodec1"]:c9(),["SharedCodec102"]:c10(),["SharedCodec150"]:c11(),["SharedCodec151"]:c12(),["SharedCodec1570"]:c13(),["SharedCodec1571"]:c14(),["SharedCodec1585"]:c15(),["SharedCodec1586"]:c16(),["SharedCodec1643"]:c17(),["SharedCodec1644"]:c18(),["SharedCodec1645"]:c19(),["SharedCodec1646"]:c20(),["SharedCodec1647"]:c21(),["SharedCodec1648"]:c22(),["SharedCodec175"]:c23(),["SharedCodec176"]:c24(),["SharedCodec437"]:c25(),["SharedCodec438"]:c26(),["SharedCodec439"]:c27(),["SharedCodec440"]:c28(),["SharedCodec441"]:c29(),["SharedCodec442"]:c30(),["SubscriptionBillingScheduleRequest"]:c31(),["SubscriptionBillingStartRequest"]:c32(),["SubscriptionDeliveryDestinationRequest"]:c33(),["SubscriptionDeliveryRequest"]:c34(),["SubscriptionOfferLineItemRequest"]:c35(),["SubscriptionPromotionRequest"]:c36(),["SubscriptionServiceLocationRequest"]:c37(),["SubscriptionTaxRequest"]:c38(),["SubscriptionTermsRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestCreate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
