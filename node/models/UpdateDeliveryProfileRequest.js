import { d8536 as c0, d8539 as c1, d8541 as c2 } from '../descriptors/data/376.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8542 as c3, d8543 as c4, d8544 as c5, d8545 as c6, d8546 as c7, d8547 as c8, d8557 as c12, d8558 as c13, d8559 as c14, d8560 as c15, d8561 as c16, d8562 as c17, d8563 as c18 } from '../descriptors/data/377.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7858 as c9 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7954 as c10 } from '../descriptors/data/345.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8285 as c11 } from '../descriptors/data/363.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7585 as c19 } from '../descriptors/data/318.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7585 as d7585 } from '../descriptors/data/318.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7585;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec1000"]:c2(),["SharedCodec1001"]:c3(),["SharedCodec1004"]:c4(),["SharedCodec1005"]:c5(),["SharedCodec1007"]:c6(),["SharedCodec1008"]:c7(),["SharedCodec1009"]:c8(),["SharedCodec3068"]:c9(),["SharedCodec3071"]:c10(),["SharedCodec3079"]:c11(),["SharedCodec987"]:c12(),["SharedCodec988"]:c13(),["SharedCodec989"]:c14(),["SharedCodec990"]:c15(),["SharedCodec991"]:c16(),["SharedCodec992"]:c17(),["SharedCodec993"]:c18(),["UpdateDeliveryProfileRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
