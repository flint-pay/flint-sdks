import { d6041 as c0, d6039 as c8, d6040 as c9 } from '../descriptors/data/274.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d380 as c1 } from '../descriptors/data/24.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8749 as c2 } from '../descriptors/data/431.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6731 as c3 } from '../descriptors/data/312.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c4 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6142 as c5, d6143 as c6, d6144 as c7, d6150 as c10, d6151 as c11 } from '../descriptors/data/280.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8768 as c12, d8769 as c13, d8770 as c16, d8771 as c17, d8772 as c18, d8773 as c19, d8774 as c20, d8775 as c21, d8776 as c24, d8777 as c25, d8778 as c26, d8779 as c27, d8780 as c28, d8781 as c29, d8782 as c31, d8783 as c32, d8784 as c35, d8785 as c37, d8786 as c38, d8787 as c39, d8788 as c40 } from '../descriptors/data/433.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7488 as c14 } from '../descriptors/data/357.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7489 as c15, d7490 as c33 } from '../descriptors/data/358.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6160 as c22, d6161 as c23, d6162 as c36 } from '../descriptors/data/281.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7568 as c30, d7570 as c34 } from '../descriptors/data/361.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d380 as d380 } from '../descriptors/data/24.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d380;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionPreviewRequestCreate"]:c1(),["CreateSubscriptionRequest"]:c2(),["DeliverySelectionRecipientRequest"]:c3(),["MetadataRequest"]:c4(),["PromotionRefInputPromotionCode"]:c5(),["PromotionRefInputPromotionID"]:c6(),["PromotionRefRequest"]:c7(),["SharedCodec0"]:c8(),["SharedCodec1"]:c9(),["SharedCodec145"]:c10(),["SharedCodec146"]:c11(),["SharedCodec1562"]:c12(),["SharedCodec1563"]:c13(),["SharedCodec1577"]:c14(),["SharedCodec1578"]:c15(),["SharedCodec1635"]:c16(),["SharedCodec1636"]:c17(),["SharedCodec1637"]:c18(),["SharedCodec1638"]:c19(),["SharedCodec1639"]:c20(),["SharedCodec1640"]:c21(),["SharedCodec169"]:c22(),["SharedCodec170"]:c23(),["SharedCodec437"]:c24(),["SharedCodec438"]:c25(),["SharedCodec439"]:c26(),["SharedCodec440"]:c27(),["SharedCodec441"]:c28(),["SharedCodec442"]:c29(),["SharedCodec97"]:c30(),["SubscriptionBillingScheduleRequest"]:c31(),["SubscriptionBillingStartRequest"]:c32(),["SubscriptionDeliveryDestinationRequest"]:c33(),["SubscriptionDeliveryRequest"]:c34(),["SubscriptionOfferLineItemRequest"]:c35(),["SubscriptionPlanChangeLineItemRequest"]:c36(),["SubscriptionPromotionRequest"]:c37(),["SubscriptionServiceLocationRequest"]:c38(),["SubscriptionTaxRequest"]:c39(),["SubscriptionTermsRequest"]:c40()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestCreate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
