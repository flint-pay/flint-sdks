import { d295 as c0 } from '../descriptors/data/15.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8892 as c1 } from '../descriptors/data/399.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c2 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8844 as c3 } from '../descriptors/data/396.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8859 as c4, d8860 as c5, d8861 as c6, d8862 as c7, d8863 as c8 } from '../descriptors/data/397.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8864 as c9, d8865 as c10, d8866 as c11, d8867 as c12, d8868 as c13, d8869 as c14, d8870 as c15, d8871 as c16, d8872 as c17, d8873 as c18, d8874 as c19, d8875 as c20, d8876 as c21, d8877 as c22, d8878 as c23, d8879 as c24, d8880 as c25, d8881 as c26, d8882 as c27 } from '../descriptors/data/398.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8928 as c28, d8929 as c29 } from '../descriptors/data/400.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d295 as d295 } from '../descriptors/data/15.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d295;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRequest"]:c0(),["GiftCardNotificationRecipient"]:c1(),["MoneyValue"]:c2(),["SharedCodec221"]:c3(),["SharedCodec433"]:c4(),["SharedCodec434"]:c5(),["SharedCodec435"]:c6(),["SharedCodec436"]:c7(),["SharedCodec437"]:c8(),["SharedCodec438"]:c9(),["SharedCodec439"]:c10(),["SharedCodec440"]:c11(),["SharedCodec441"]:c12(),["SharedCodec442"]:c13(),["SharedCodec443"]:c14(),["SharedCodec444"]:c15(),["SharedCodec445"]:c16(),["SharedCodec446"]:c17(),["SharedCodec447"]:c18(),["SharedCodec448"]:c19(),["SharedCodec449"]:c20(),["SharedCodec450"]:c21(),["SharedCodec451"]:c22(),["SharedCodec452"]:c23(),["SharedCodec453"]:c24(),["SharedCodec454"]:c25(),["SharedCodec455"]:c26(),["SharedCodec456"]:c27(),["SharedCodec460"]:c28(),["SharedCodec461"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
