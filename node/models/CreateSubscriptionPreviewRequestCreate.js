import { d7957 as c0, d7955 as c9, d7956 as c22 } from '../descriptors/data/345.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d411 as c1 } from '../descriptors/data/25.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10665 as c2 } from '../descriptors/data/502.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8641 as c3 } from '../descriptors/data/382.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7857 as c4 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8058 as c5, d8059 as c6, d8060 as c7, d8066 as c10, d8067 as c11, d8076 as c23 } from '../descriptors/data/351.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9484 as c8, d9486 as c34 } from '../descriptors/data/433.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10684 as c12, d10685 as c13, d10686 as c16, d10687 as c17, d10688 as c18, d10689 as c19, d10690 as c20, d10691 as c21, d10692 as c25, d10693 as c26, d10694 as c27, d10695 as c28, d10696 as c29, d10697 as c30, d10698 as c31, d10699 as c32, d10700 as c35, d10701 as c37, d10702 as c38, d10703 as c39 } from '../descriptors/data/504.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9404 as c14, d9405 as c15, d9406 as c33 } from '../descriptors/data/429.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8077 as c24, d8078 as c36 } from '../descriptors/data/352.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10704 as c40 } from '../descriptors/data/505.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d411 as d411 } from '../descriptors/data/25.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d411;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionPreviewRequestCreate"]:c1(),["CreateSubscriptionRequest"]:c2(),["DeliverySelectionRecipientRequest"]:c3(),["MetadataRequest"]:c4(),["PromotionRefInputPromotionCode"]:c5(),["PromotionRefInputPromotionID"]:c6(),["PromotionRefRequest"]:c7(),["SharedCodec176"]:c8(),["SharedCodec2"]:c9(),["SharedCodec238"]:c10(),["SharedCodec239"]:c11(),["SharedCodec2864"]:c12(),["SharedCodec2865"]:c13(),["SharedCodec2880"]:c14(),["SharedCodec2881"]:c15(),["SharedCodec2963"]:c16(),["SharedCodec2964"]:c17(),["SharedCodec2968"]:c18(),["SharedCodec2969"]:c19(),["SharedCodec2970"]:c20(),["SharedCodec2971"]:c21(),["SharedCodec3"]:c22(),["SharedCodec327"]:c23(),["SharedCodec328"]:c24(),["SharedCodec604"]:c25(),["SharedCodec605"]:c26(),["SharedCodec606"]:c27(),["SharedCodec607"]:c28(),["SharedCodec608"]:c29(),["SharedCodec609"]:c30(),["SubscriptionBillingScheduleRequest"]:c31(),["SubscriptionBillingStartRequest"]:c32(),["SubscriptionDeliveryDestinationRequest"]:c33(),["SubscriptionDeliveryRequest"]:c34(),["SubscriptionOfferLineItemRequest"]:c35(),["SubscriptionPlanChangeLineItemRequest"]:c36(),["SubscriptionPromotionRequest"]:c37(),["SubscriptionServiceLocationRequest"]:c38(),["SubscriptionTaxRequest"]:c39(),["SubscriptionTermsRequest"]:c40()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestCreate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
