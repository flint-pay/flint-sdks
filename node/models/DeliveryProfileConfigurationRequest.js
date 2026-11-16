import { d8536 as c0, d8539 as c1, d8541 as c2 } from '../descriptors/data/376.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8542 as c3, d8543 as c4, d8544 as c5, d8545 as c6, d8546 as c7, d8547 as c8, d8557 as c9, d8558 as c10, d8559 as c11, d8560 as c12, d8561 as c13, d8562 as c14, d8563 as c15 } from '../descriptors/data/377.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8536 as d8536 } from '../descriptors/data/376.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8536;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec1000"]:c2(),["SharedCodec1001"]:c3(),["SharedCodec1004"]:c4(),["SharedCodec1005"]:c5(),["SharedCodec1007"]:c6(),["SharedCodec1008"]:c7(),["SharedCodec1009"]:c8(),["SharedCodec987"]:c9(),["SharedCodec988"]:c10(),["SharedCodec989"]:c11(),["SharedCodec990"]:c12(),["SharedCodec991"]:c13(),["SharedCodec992"]:c14(),["SharedCodec993"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
