import { d866 as c0 } from '../descriptors/data/47.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8863 as c1 } from '../descriptors/data/397.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8864 as c2, d8865 as c3, d8866 as c4, d8867 as c5, d8868 as c6, d8869 as c7, d8870 as c8, d8871 as c9, d8872 as c10, d8873 as c11, d8874 as c12, d8875 as c13, d8876 as c14, d8877 as c15, d8878 as c16, d8879 as c17 } from '../descriptors/data/398.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d866 as d866 } from '../descriptors/data/47.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d866;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceRequest"]:c0(),["SharedCodec437"]:c1(),["SharedCodec438"]:c2(),["SharedCodec439"]:c3(),["SharedCodec440"]:c4(),["SharedCodec441"]:c5(),["SharedCodec442"]:c6(),["SharedCodec443"]:c7(),["SharedCodec444"]:c8(),["SharedCodec445"]:c9(),["SharedCodec446"]:c10(),["SharedCodec447"]:c11(),["SharedCodec448"]:c12(),["SharedCodec449"]:c13(),["SharedCodec450"]:c14(),["SharedCodec451"]:c15(),["SharedCodec452"]:c16(),["SharedCodec453"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
