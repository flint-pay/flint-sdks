import { d673 as c0, d674 as c1 } from '../descriptors/data/37.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d681 as c2 } from '../descriptors/data/38.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c3 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1894 as c4, d1895 as c5, d1897 as c6, d1898 as c7, d1899 as c8, d1900 as c9 } from '../descriptors/data/94.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8574 as c10, d8576 as c11, d8577 as c12 } from '../descriptors/data/378.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8580 as c13 } from '../descriptors/data/379.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d673 as d673 } from '../descriptors/data/37.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d673;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationMethodOutcome"]:c0(),["DeliveryRateEvaluationOutcome"]:c1(),["DeliveryRateEvaluationWindow"]:c2(),["MoneyValue"]:c3(),["SharedCodec1048"]:c4(),["SharedCodec1049"]:c5(),["SharedCodec1050"]:c6(),["SharedCodec1051"]:c7(),["SharedCodec1052"]:c8(),["SharedCodec1053"]:c9(),["SharedCodec205"]:c10(),["SharedCodec207"]:c11(),["SharedCodec208"]:c12(),["SharedCodec211"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationMethodOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
