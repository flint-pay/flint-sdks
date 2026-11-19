import { d299 as c0 } from '../descriptors/data/15.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9064 as c1, d9051 as c24, d9052 as c25, d9053 as c26, d9054 as c27 } from '../descriptors/data/411.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c2 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9016 as c3 } from '../descriptors/data/409.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9031 as c4, d9032 as c5, d9033 as c6, d9034 as c7, d9035 as c8, d9036 as c9, d9037 as c10, d9038 as c11, d9039 as c12, d9040 as c13, d9041 as c14, d9042 as c15, d9043 as c16, d9044 as c17, d9045 as c18, d9046 as c19, d9047 as c20, d9048 as c21, d9049 as c22, d9050 as c23 } from '../descriptors/data/410.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9100 as c28, d9101 as c29 } from '../descriptors/data/413.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d299 as d299 } from '../descriptors/data/15.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d299;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRequest"]:c0(),["GiftCardNotificationRecipient"]:c1(),["MoneyValue"]:c2(),["SharedCodec216"]:c3(),["SharedCodec419"]:c4(),["SharedCodec420"]:c5(),["SharedCodec421"]:c6(),["SharedCodec422"]:c7(),["SharedCodec423"]:c8(),["SharedCodec424"]:c9(),["SharedCodec425"]:c10(),["SharedCodec426"]:c11(),["SharedCodec427"]:c12(),["SharedCodec428"]:c13(),["SharedCodec429"]:c14(),["SharedCodec430"]:c15(),["SharedCodec431"]:c16(),["SharedCodec432"]:c17(),["SharedCodec433"]:c18(),["SharedCodec434"]:c19(),["SharedCodec435"]:c20(),["SharedCodec436"]:c21(),["SharedCodec437"]:c22(),["SharedCodec438"]:c23(),["SharedCodec439"]:c24(),["SharedCodec440"]:c25(),["SharedCodec441"]:c26(),["SharedCodec442"]:c27(),["SharedCodec446"]:c28(),["SharedCodec447"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
