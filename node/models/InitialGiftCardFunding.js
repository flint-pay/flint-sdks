import { d917 as c0 } from '../descriptors/data/49.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c1 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8844 as c2 } from '../descriptors/data/396.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8859 as c3, d8860 as c4, d8861 as c5, d8862 as c6, d8863 as c7 } from '../descriptors/data/397.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8864 as c8, d8865 as c9, d8866 as c10, d8867 as c11, d8868 as c12, d8869 as c13, d8870 as c14, d8871 as c15, d8872 as c16, d8873 as c17, d8874 as c18, d8875 as c19, d8876 as c20, d8877 as c21, d8878 as c22, d8879 as c23, d8880 as c24, d8881 as c25, d8882 as c26 } from '../descriptors/data/398.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d917 as d917 } from '../descriptors/data/49.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d917;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InitialGiftCardFunding"]:c0(),["MoneyValue"]:c1(),["SharedCodec221"]:c2(),["SharedCodec433"]:c3(),["SharedCodec434"]:c4(),["SharedCodec435"]:c5(),["SharedCodec436"]:c6(),["SharedCodec437"]:c7(),["SharedCodec438"]:c8(),["SharedCodec439"]:c9(),["SharedCodec440"]:c10(),["SharedCodec441"]:c11(),["SharedCodec442"]:c12(),["SharedCodec443"]:c13(),["SharedCodec444"]:c14(),["SharedCodec445"]:c15(),["SharedCodec446"]:c16(),["SharedCodec447"]:c17(),["SharedCodec448"]:c18(),["SharedCodec449"]:c19(),["SharedCodec450"]:c20(),["SharedCodec451"]:c21(),["SharedCodec452"]:c22(),["SharedCodec453"]:c23(),["SharedCodec454"]:c24(),["SharedCodec455"]:c25(),["SharedCodec456"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInitialGiftCardFunding(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
