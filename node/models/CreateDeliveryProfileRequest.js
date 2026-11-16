import { d265 as c0 } from '../descriptors/data/12.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8536 as c1, d8539 as c2, d8541 as c4 } from '../descriptors/data/376.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7857 as c3 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8542 as c5, d8543 as c6, d8544 as c7, d8545 as c8, d8546 as c9, d8547 as c10, d8557 as c11, d8558 as c12, d8559 as c13, d8560 as c14, d8561 as c15, d8562 as c16, d8563 as c17 } from '../descriptors/data/377.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d265 as d265 } from '../descriptors/data/12.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d265;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["MetadataRequest"]:c3(),["SharedCodec1000"]:c4(),["SharedCodec1001"]:c5(),["SharedCodec1004"]:c6(),["SharedCodec1005"]:c7(),["SharedCodec1007"]:c8(),["SharedCodec1008"]:c9(),["SharedCodec1009"]:c10(),["SharedCodec987"]:c11(),["SharedCodec988"]:c12(),["SharedCodec989"]:c13(),["SharedCodec990"]:c14(),["SharedCodec991"]:c15(),["SharedCodec992"]:c16(),["SharedCodec993"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
