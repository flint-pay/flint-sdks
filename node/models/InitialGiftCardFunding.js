import { d923 as c0 } from '../descriptors/data/50.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c1 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9016 as c2 } from '../descriptors/data/409.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9031 as c3, d9032 as c4, d9033 as c5, d9034 as c6, d9035 as c7, d9036 as c8, d9037 as c9, d9038 as c10, d9039 as c11, d9040 as c12, d9041 as c13, d9042 as c14, d9043 as c15, d9044 as c16, d9045 as c17, d9046 as c18, d9047 as c19, d9048 as c20, d9049 as c21, d9050 as c22 } from '../descriptors/data/410.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9051 as c23, d9052 as c24, d9053 as c25, d9054 as c26 } from '../descriptors/data/411.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d923 as d923 } from '../descriptors/data/50.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d923;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InitialGiftCardFunding"]:c0(),["MoneyValue"]:c1(),["SharedCodec216"]:c2(),["SharedCodec419"]:c3(),["SharedCodec420"]:c4(),["SharedCodec421"]:c5(),["SharedCodec422"]:c6(),["SharedCodec423"]:c7(),["SharedCodec424"]:c8(),["SharedCodec425"]:c9(),["SharedCodec426"]:c10(),["SharedCodec427"]:c11(),["SharedCodec428"]:c12(),["SharedCodec429"]:c13(),["SharedCodec430"]:c14(),["SharedCodec431"]:c15(),["SharedCodec432"]:c16(),["SharedCodec433"]:c17(),["SharedCodec434"]:c18(),["SharedCodec435"]:c19(),["SharedCodec436"]:c20(),["SharedCodec437"]:c21(),["SharedCodec438"]:c22(),["SharedCodec439"]:c23(),["SharedCodec440"]:c24(),["SharedCodec441"]:c25(),["SharedCodec442"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInitialGiftCardFunding(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
