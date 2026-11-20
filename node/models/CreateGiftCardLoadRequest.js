import { d295 as c0 } from '../descriptors/data/15.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c1 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9030 as c2 } from '../descriptors/data/409.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9045 as c3, d9046 as c4, d9047 as c5, d9048 as c6, d9049 as c7, d9050 as c8, d9051 as c9, d9052 as c10, d9053 as c11, d9054 as c12, d9055 as c13, d9056 as c14, d9057 as c15, d9058 as c16, d9059 as c17, d9060 as c18, d9061 as c19, d9062 as c20, d9063 as c21, d9064 as c22 } from '../descriptors/data/410.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9065 as c23, d9066 as c24, d9067 as c25, d9068 as c26 } from '../descriptors/data/411.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d295 as d295 } from '../descriptors/data/15.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d295;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardLoadRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec216"]:c2(),["SharedCodec419"]:c3(),["SharedCodec420"]:c4(),["SharedCodec421"]:c5(),["SharedCodec422"]:c6(),["SharedCodec423"]:c7(),["SharedCodec424"]:c8(),["SharedCodec425"]:c9(),["SharedCodec426"]:c10(),["SharedCodec427"]:c11(),["SharedCodec428"]:c12(),["SharedCodec429"]:c13(),["SharedCodec430"]:c14(),["SharedCodec431"]:c15(),["SharedCodec432"]:c16(),["SharedCodec433"]:c17(),["SharedCodec434"]:c18(),["SharedCodec435"]:c19(),["SharedCodec436"]:c20(),["SharedCodec437"]:c21(),["SharedCodec438"]:c22(),["SharedCodec439"]:c23(),["SharedCodec440"]:c24(),["SharedCodec441"]:c25(),["SharedCodec442"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardLoadRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
