import { d348 as c0 } from '../descriptors/data/20.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7857 as c1 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c2 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9864 as c3, d9865 as c4 } from '../descriptors/data/453.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9753 as c5 } from '../descriptors/data/447.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8068 as c6 } from '../descriptors/data/351.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8844 as c7 } from '../descriptors/data/396.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9900 as c8, d9901 as c9 } from '../descriptors/data/455.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9902 as c10, d9903 as c11, d9904 as c12, d9905 as c13, d9906 as c14, d9907 as c15, d9908 as c16, d9909 as c17, d9910 as c18, d9911 as c19, d9912 as c20, d9913 as c21, d9914 as c22 } from '../descriptors/data/456.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d348 as d348 } from '../descriptors/data/20.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d348;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePaymentIntentRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["OrderPaymentSourceCardSelection"]:c3(),["OrderPaymentSourceSelection"]:c4(),["PaymentSplitRequest"]:c5(),["PlatformFeeRequest"]:c6(),["SharedCodec221"]:c7(),["SharedCodec526"]:c8(),["SharedCodec527"]:c9(),["SharedCodec528"]:c10(),["SharedCodec529"]:c11(),["SharedCodec530"]:c12(),["SharedCodec531"]:c13(),["SharedCodec532"]:c14(),["SharedCodec533"]:c15(),["SharedCodec534"]:c16(),["SharedCodec535"]:c17(),["SharedCodec536"]:c18(),["SharedCodec537"]:c19(),["SharedCodec538"]:c20(),["SharedCodec539"]:c21(),["SharedCodec540"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
