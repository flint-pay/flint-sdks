import { d874 as c0 } from '../descriptors/data/48.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9049 as c1, d9050 as c2, d9051 as c3, d9052 as c4, d9053 as c5, d9054 as c6, d9055 as c7, d9056 as c8, d9057 as c9, d9058 as c10, d9059 as c11, d9060 as c12, d9061 as c13, d9062 as c14, d9063 as c15, d9064 as c16 } from '../descriptors/data/410.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9065 as c17 } from '../descriptors/data/411.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d874 as d874 } from '../descriptors/data/48.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d874;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceRequest"]:c0(),["SharedCodec423"]:c1(),["SharedCodec424"]:c2(),["SharedCodec425"]:c3(),["SharedCodec426"]:c4(),["SharedCodec427"]:c5(),["SharedCodec428"]:c6(),["SharedCodec429"]:c7(),["SharedCodec430"]:c8(),["SharedCodec431"]:c9(),["SharedCodec432"]:c10(),["SharedCodec433"]:c11(),["SharedCodec434"]:c12(),["SharedCodec435"]:c13(),["SharedCodec436"]:c14(),["SharedCodec437"]:c15(),["SharedCodec438"]:c16(),["SharedCodec439"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
