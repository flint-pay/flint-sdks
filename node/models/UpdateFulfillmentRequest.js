import { d7957 as c0, d7955 as c3, d7956 as c4, d7954 as c6 } from '../descriptors/data/345.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8265 as c1, d8266 as c2 } from '../descriptors/data/362.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7858 as c5 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8786 as c7, d8787 as c8, d8788 as c9, d8789 as c10, d8790 as c11, d8791 as c12 } from '../descriptors/data/392.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8792 as c13, d8793 as c14, d8794 as c15, d8795 as c16 } from '../descriptors/data/393.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7590 as c17 } from '../descriptors/data/318.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7590 as d7590 } from '../descriptors/data/318.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7590;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec1741"]:c1(),["SharedCodec1742"]:c2(),["SharedCodec2"]:c3(),["SharedCodec3"]:c4(),["SharedCodec3068"]:c5(),["SharedCodec3071"]:c6(),["SharedCodec3087"]:c7(),["SharedCodec3088"]:c8(),["SharedCodec3089"]:c9(),["SharedCodec3090"]:c10(),["SharedCodec3091"]:c11(),["SharedCodec3092"]:c12(),["SharedCodec3093"]:c13(),["SharedCodec3094"]:c14(),["SharedCodec3095"]:c15(),["SharedCodec3096"]:c16(),["UpdateFulfillmentRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
