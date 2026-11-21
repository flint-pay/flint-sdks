import { d874 as c0 } from '../descriptors/data/47.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9061 as c1, d9062 as c2, d9063 as c3, d9064 as c4, d9065 as c5, d9066 as c6, d9067 as c7, d9068 as c8, d9069 as c9, d9070 as c10, d9071 as c11, d9072 as c12, d9073 as c13, d9074 as c14, d9075 as c15, d9076 as c16 } from '../descriptors/data/410.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9077 as c17 } from '../descriptors/data/411.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d874 as d874 } from '../descriptors/data/47.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d874;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceRequest"]:c0(),["SharedCodec427"]:c1(),["SharedCodec428"]:c2(),["SharedCodec429"]:c3(),["SharedCodec430"]:c4(),["SharedCodec431"]:c5(),["SharedCodec432"]:c6(),["SharedCodec433"]:c7(),["SharedCodec434"]:c8(),["SharedCodec435"]:c9(),["SharedCodec436"]:c10(),["SharedCodec437"]:c11(),["SharedCodec438"]:c12(),["SharedCodec439"]:c13(),["SharedCodec440"]:c14(),["SharedCodec441"]:c15(),["SharedCodec442"]:c16(),["SharedCodec443"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
