import { d872 as c0 } from '../descriptors/data/48.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9035 as c1, d9036 as c2, d9037 as c3, d9038 as c4, d9039 as c5, d9040 as c6, d9041 as c7, d9042 as c8, d9043 as c9, d9044 as c10, d9045 as c11, d9046 as c12, d9047 as c13, d9048 as c14, d9049 as c15, d9050 as c16 } from '../descriptors/data/410.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9051 as c17 } from '../descriptors/data/411.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d872 as d872 } from '../descriptors/data/48.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d872;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceRequest"]:c0(),["SharedCodec423"]:c1(),["SharedCodec424"]:c2(),["SharedCodec425"]:c3(),["SharedCodec426"]:c4(),["SharedCodec427"]:c5(),["SharedCodec428"]:c6(),["SharedCodec429"]:c7(),["SharedCodec430"]:c8(),["SharedCodec431"]:c9(),["SharedCodec432"]:c10(),["SharedCodec433"]:c11(),["SharedCodec434"]:c12(),["SharedCodec435"]:c13(),["SharedCodec436"]:c14(),["SharedCodec437"]:c15(),["SharedCodec438"]:c16(),["SharedCodec439"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
