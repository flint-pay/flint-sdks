import { d674 as c0 } from '../descriptors/data/37.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d681 as c1 } from '../descriptors/data/38.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c2 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1894 as c3, d1895 as c4, d1897 as c5, d1898 as c6, d1899 as c7, d1900 as c8 } from '../descriptors/data/94.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8574 as c9, d8576 as c10, d8577 as c11 } from '../descriptors/data/378.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8580 as c12 } from '../descriptors/data/379.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d674 as d674 } from '../descriptors/data/37.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d674;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationOutcome"]:c0(),["DeliveryRateEvaluationWindow"]:c1(),["MoneyValue"]:c2(),["SharedCodec1048"]:c3(),["SharedCodec1049"]:c4(),["SharedCodec1050"]:c5(),["SharedCodec1051"]:c6(),["SharedCodec1052"]:c7(),["SharedCodec1053"]:c8(),["SharedCodec205"]:c9(),["SharedCodec207"]:c10(),["SharedCodec208"]:c11(),["SharedCodec211"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
