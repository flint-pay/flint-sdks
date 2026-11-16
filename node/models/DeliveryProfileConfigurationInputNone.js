import { d632 as c0 } from '../descriptors/data/36.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8539 as c1 } from '../descriptors/data/376.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8543 as c2, d8544 as c3, d8545 as c4, d8546 as c5, d8547 as c6, d8559 as c7, d8560 as c8 } from '../descriptors/data/377.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d632 as d632 } from '../descriptors/data/36.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d632;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputNone"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec1004"]:c2(),["SharedCodec1005"]:c3(),["SharedCodec1007"]:c4(),["SharedCodec1008"]:c5(),["SharedCodec1009"]:c6(),["SharedCodec989"]:c7(),["SharedCodec990"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputNone(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
