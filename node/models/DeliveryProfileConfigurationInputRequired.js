import { d634 as c0 } from '../descriptors/data/36.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8539 as c1 } from '../descriptors/data/376.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8543 as c2, d8544 as c3, d8545 as c4, d8546 as c5, d8547 as c6, d8557 as c7, d8558 as c8, d8561 as c9, d8562 as c10, d8563 as c11 } from '../descriptors/data/377.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d634 as d634 } from '../descriptors/data/36.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d634;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputRequired"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec1004"]:c2(),["SharedCodec1005"]:c3(),["SharedCodec1007"]:c4(),["SharedCodec1008"]:c5(),["SharedCodec1009"]:c6(),["SharedCodec987"]:c7(),["SharedCodec988"]:c8(),["SharedCodec991"]:c9(),["SharedCodec992"]:c10(),["SharedCodec993"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputRequired(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
