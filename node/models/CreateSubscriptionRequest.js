import { d7957 as c0, d7955 as c8, d7956 as c21 } from '../descriptors/data/345.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10665 as c1 } from '../descriptors/data/502.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8641 as c2 } from '../descriptors/data/382.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7857 as c3 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8058 as c4, d8059 as c5, d8060 as c6, d8066 as c9, d8067 as c10, d8076 as c22 } from '../descriptors/data/351.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9484 as c7, d9486 as c33 } from '../descriptors/data/433.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10684 as c11, d10685 as c12, d10686 as c15, d10687 as c16, d10688 as c17, d10689 as c18, d10690 as c19, d10691 as c20, d10692 as c24, d10693 as c25, d10694 as c26, d10695 as c27, d10696 as c28, d10697 as c29, d10698 as c30, d10699 as c31, d10700 as c34, d10701 as c36, d10702 as c37, d10703 as c38 } from '../descriptors/data/504.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9404 as c13, d9405 as c14, d9406 as c32 } from '../descriptors/data/429.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8077 as c23, d8078 as c35 } from '../descriptors/data/352.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10704 as c39 } from '../descriptors/data/505.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10665 as d10665 } from '../descriptors/data/502.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10665;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["MetadataRequest"]:c3(),["PromotionRefInputPromotionCode"]:c4(),["PromotionRefInputPromotionID"]:c5(),["PromotionRefRequest"]:c6(),["SharedCodec176"]:c7(),["SharedCodec2"]:c8(),["SharedCodec238"]:c9(),["SharedCodec239"]:c10(),["SharedCodec2864"]:c11(),["SharedCodec2865"]:c12(),["SharedCodec2880"]:c13(),["SharedCodec2881"]:c14(),["SharedCodec2963"]:c15(),["SharedCodec2964"]:c16(),["SharedCodec2968"]:c17(),["SharedCodec2969"]:c18(),["SharedCodec2970"]:c19(),["SharedCodec2971"]:c20(),["SharedCodec3"]:c21(),["SharedCodec327"]:c22(),["SharedCodec328"]:c23(),["SharedCodec604"]:c24(),["SharedCodec605"]:c25(),["SharedCodec606"]:c26(),["SharedCodec607"]:c27(),["SharedCodec608"]:c28(),["SharedCodec609"]:c29(),["SubscriptionBillingScheduleRequest"]:c30(),["SubscriptionBillingStartRequest"]:c31(),["SubscriptionDeliveryDestinationRequest"]:c32(),["SubscriptionDeliveryRequest"]:c33(),["SubscriptionOfferLineItemRequest"]:c34(),["SubscriptionPlanChangeLineItemRequest"]:c35(),["SubscriptionPromotionRequest"]:c36(),["SubscriptionServiceLocationRequest"]:c37(),["SubscriptionTaxRequest"]:c38(),["SubscriptionTermsRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
