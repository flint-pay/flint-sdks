import { d673 as c0, d674 as c1 } from '../descriptors/data/37.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d680 as c2, d681 as c3 } from '../descriptors/data/38.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c4 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1894 as c5, d1895 as c6, d1897 as c7, d1898 as c8, d1899 as c9, d1900 as c10 } from '../descriptors/data/94.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8574 as c11, d8576 as c12, d8577 as c13 } from '../descriptors/data/378.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8580 as c14 } from '../descriptors/data/379.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d680 as d680 } from '../descriptors/data/38.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d680;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationMethodOutcome"]:c0(),["DeliveryRateEvaluationOutcome"]:c1(),["DeliveryRateEvaluationResponse"]:c2(),["DeliveryRateEvaluationWindow"]:c3(),["MoneyValue"]:c4(),["SharedCodec1048"]:c5(),["SharedCodec1049"]:c6(),["SharedCodec1050"]:c7(),["SharedCodec1051"]:c8(),["SharedCodec1052"]:c9(),["SharedCodec1053"]:c10(),["SharedCodec205"]:c11(),["SharedCodec207"]:c12(),["SharedCodec208"]:c13(),["SharedCodec211"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
