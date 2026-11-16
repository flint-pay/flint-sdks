import { d7957 as c0, d7955 as c3, d7956 as c12 } from '../descriptors/data/345.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8641 as c1 } from '../descriptors/data/382.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9484 as c2, d9486 as c27 } from '../descriptors/data/433.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8066 as c4, d8067 as c5, d8076 as c20 } from '../descriptors/data/351.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10711 as c6, d10712 as c7 } from '../descriptors/data/505.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9404 as c8, d9405 as c9, d9406 as c26 } from '../descriptors/data/429.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10688 as c10, d10689 as c11, d10692 as c22, d10693 as c23, d10694 as c24 } from '../descriptors/data/504.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7859 as c13, d7860 as c14, d7858 as c15 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10717 as c16, d10718 as c17, d10719 as c18, d10720 as c19 } from '../descriptors/data/506.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8077 as c21 } from '../descriptors/data/352.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10745 as c25 } from '../descriptors/data/508.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7651 as c28 } from '../descriptors/data/323.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7651 as d7651 } from '../descriptors/data/323.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7651;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["SharedCodec176"]:c2(),["SharedCodec2"]:c3(),["SharedCodec238"]:c4(),["SharedCodec239"]:c5(),["SharedCodec2862"]:c6(),["SharedCodec2863"]:c7(),["SharedCodec2880"]:c8(),["SharedCodec2881"]:c9(),["SharedCodec2968"]:c10(),["SharedCodec2969"]:c11(),["SharedCodec3"]:c12(),["SharedCodec3066"]:c13(),["SharedCodec3067"]:c14(),["SharedCodec3068"]:c15(),["SharedCodec3201"]:c16(),["SharedCodec3202"]:c17(),["SharedCodec3203"]:c18(),["SharedCodec3204"]:c19(),["SharedCodec327"]:c20(),["SharedCodec328"]:c21(),["SharedCodec604"]:c22(),["SharedCodec605"]:c23(),["SharedCodec606"]:c24(),["SubscriptionBillingScheduleUpdateRequest"]:c25(),["SubscriptionDeliveryDestinationRequest"]:c26(),["SubscriptionDeliveryRequest"]:c27(),["UpdateSubscriptionRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
