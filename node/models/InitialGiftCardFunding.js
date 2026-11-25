import { d927 as c0 } from '../descriptors/data/50.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8003 as c1 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9122 as c2 } from '../descriptors/data/413.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9137 as c3, d9138 as c4, d9139 as c5, d9140 as c6, d9141 as c7, d9142 as c8, d9143 as c9, d9144 as c10, d9145 as c11, d9146 as c12, d9147 as c13, d9148 as c14, d9149 as c15, d9150 as c16, d9151 as c17, d9152 as c18, d9153 as c19, d9154 as c20, d9155 as c21, d9156 as c22 } from '../descriptors/data/414.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9157 as c23, d9158 as c24, d9159 as c25, d9160 as c26 } from '../descriptors/data/415.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d927 as d927 } from '../descriptors/data/50.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d927;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InitialGiftCardFunding"]:c0(),["MoneyValue"]:c1(),["SharedCodec219"]:c2(),["SharedCodec430"]:c3(),["SharedCodec431"]:c4(),["SharedCodec432"]:c5(),["SharedCodec433"]:c6(),["SharedCodec434"]:c7(),["SharedCodec435"]:c8(),["SharedCodec436"]:c9(),["SharedCodec437"]:c10(),["SharedCodec438"]:c11(),["SharedCodec439"]:c12(),["SharedCodec440"]:c13(),["SharedCodec441"]:c14(),["SharedCodec442"]:c15(),["SharedCodec443"]:c16(),["SharedCodec444"]:c17(),["SharedCodec445"]:c18(),["SharedCodec446"]:c19(),["SharedCodec447"]:c20(),["SharedCodec448"]:c21(),["SharedCodec449"]:c22(),["SharedCodec450"]:c23(),["SharedCodec451"]:c24(),["SharedCodec452"]:c25(),["SharedCodec453"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInitialGiftCardFunding(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
