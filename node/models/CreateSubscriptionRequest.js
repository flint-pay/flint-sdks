import { d6041 as c0, d6039 as c7, d6040 as c8 } from '../descriptors/data/274.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8749 as c1 } from '../descriptors/data/431.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6731 as c2 } from '../descriptors/data/312.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c3 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6142 as c4, d6143 as c5, d6144 as c6, d6150 as c9, d6151 as c10 } from '../descriptors/data/280.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8768 as c11, d8769 as c12, d8770 as c15, d8771 as c16, d8772 as c17, d8773 as c18, d8774 as c19, d8775 as c20, d8776 as c23, d8777 as c24, d8778 as c25, d8779 as c26, d8780 as c27, d8781 as c28, d8782 as c30, d8783 as c31, d8784 as c34, d8785 as c36, d8786 as c37, d8787 as c38, d8788 as c39 } from '../descriptors/data/433.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7488 as c13 } from '../descriptors/data/357.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7489 as c14, d7490 as c32 } from '../descriptors/data/358.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6160 as c21, d6161 as c22, d6162 as c35 } from '../descriptors/data/281.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7568 as c29, d7570 as c33 } from '../descriptors/data/361.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8749 as d8749 } from '../descriptors/data/431.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8749;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["MetadataRequest"]:c3(),["PromotionRefInputPromotionCode"]:c4(),["PromotionRefInputPromotionID"]:c5(),["PromotionRefRequest"]:c6(),["SharedCodec0"]:c7(),["SharedCodec1"]:c8(),["SharedCodec145"]:c9(),["SharedCodec146"]:c10(),["SharedCodec1562"]:c11(),["SharedCodec1563"]:c12(),["SharedCodec1577"]:c13(),["SharedCodec1578"]:c14(),["SharedCodec1635"]:c15(),["SharedCodec1636"]:c16(),["SharedCodec1637"]:c17(),["SharedCodec1638"]:c18(),["SharedCodec1639"]:c19(),["SharedCodec1640"]:c20(),["SharedCodec169"]:c21(),["SharedCodec170"]:c22(),["SharedCodec437"]:c23(),["SharedCodec438"]:c24(),["SharedCodec439"]:c25(),["SharedCodec440"]:c26(),["SharedCodec441"]:c27(),["SharedCodec442"]:c28(),["SharedCodec97"]:c29(),["SubscriptionBillingScheduleRequest"]:c30(),["SubscriptionBillingStartRequest"]:c31(),["SubscriptionDeliveryDestinationRequest"]:c32(),["SubscriptionDeliveryRequest"]:c33(),["SubscriptionOfferLineItemRequest"]:c34(),["SubscriptionPlanChangeLineItemRequest"]:c35(),["SubscriptionPromotionRequest"]:c36(),["SubscriptionServiceLocationRequest"]:c37(),["SubscriptionTaxRequest"]:c38(),["SubscriptionTermsRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
