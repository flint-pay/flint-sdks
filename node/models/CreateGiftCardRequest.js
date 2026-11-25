import { d302 as c0 } from '../descriptors/data/16.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9170 as c1, d9157 as c24, d9158 as c25, d9159 as c26, d9160 as c27 } from '../descriptors/data/415.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8003 as c2 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9122 as c3 } from '../descriptors/data/413.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9137 as c4, d9138 as c5, d9139 as c6, d9140 as c7, d9141 as c8, d9142 as c9, d9143 as c10, d9144 as c11, d9145 as c12, d9146 as c13, d9147 as c14, d9148 as c15, d9149 as c16, d9150 as c17, d9151 as c18, d9152 as c19, d9153 as c20, d9154 as c21, d9155 as c22, d9156 as c23 } from '../descriptors/data/414.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9206 as c28, d9207 as c29 } from '../descriptors/data/417.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d302 as d302 } from '../descriptors/data/16.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d302;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRequest"]:c0(),["GiftCardNotificationRecipient"]:c1(),["MoneyValue"]:c2(),["SharedCodec219"]:c3(),["SharedCodec430"]:c4(),["SharedCodec431"]:c5(),["SharedCodec432"]:c6(),["SharedCodec433"]:c7(),["SharedCodec434"]:c8(),["SharedCodec435"]:c9(),["SharedCodec436"]:c10(),["SharedCodec437"]:c11(),["SharedCodec438"]:c12(),["SharedCodec439"]:c13(),["SharedCodec440"]:c14(),["SharedCodec441"]:c15(),["SharedCodec442"]:c16(),["SharedCodec443"]:c17(),["SharedCodec444"]:c18(),["SharedCodec445"]:c19(),["SharedCodec446"]:c20(),["SharedCodec447"]:c21(),["SharedCodec448"]:c22(),["SharedCodec449"]:c23(),["SharedCodec450"]:c24(),["SharedCodec451"]:c25(),["SharedCodec452"]:c26(),["SharedCodec453"]:c27(),["SharedCodec457"]:c28(),["SharedCodec458"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
