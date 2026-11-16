import { d7957 as c0, d7955 as c3, d7956 as c8 } from '../descriptors/data/345.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d318 as c1 } from '../descriptors/data/17.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8641 as c2 } from '../descriptors/data/382.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8066 as c4, d8067 as c5 } from '../descriptors/data/351.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9404 as c6, d9405 as c7, d9406 as c13 } from '../descriptors/data/429.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9386 as c9, d9387 as c10, d9388 as c11, d9389 as c12, d9392 as c16 } from '../descriptors/data/428.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9486 as c14, d9488 as c15 } from '../descriptors/data/433.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d318 as d318 } from '../descriptors/data/17.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d318;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateMeSubscriptionPreviewRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["SharedCodec2"]:c3(),["SharedCodec238"]:c4(),["SharedCodec239"]:c5(),["SharedCodec2880"]:c6(),["SharedCodec2881"]:c7(),["SharedCodec3"]:c8(),["SharedCodec483"]:c9(),["SharedCodec484"]:c10(),["SharedCodec485"]:c11(),["SharedCodec486"]:c12(),["SubscriptionDeliveryDestinationRequest"]:c13(),["SubscriptionDeliveryRequest"]:c14(),["SubscriptionQuantityChangeLineItemRequest"]:c15(),["SubscriptionSwapPreviewRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeSubscriptionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
