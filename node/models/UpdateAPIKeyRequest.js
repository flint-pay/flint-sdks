import { d3215 as c0, d3216 as c2, d3217 as c3 } from '../descriptors/data/129.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3232 as c1, d3226 as c4, d3227 as c5, d3228 as c7 } from '../descriptors/data/130.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3190 as c6 } from '../descriptors/data/128.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2580 as c8 } from '../descriptors/data/107.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2580 as d2580 } from '../descriptors/data/107.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2580;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1248"]:c0(),["SharedCodec1249"]:c1(),["SharedCodec1250"]:c2(),["SharedCodec1251"]:c3(),["SharedCodec253"]:c4(),["SharedCodec254"]:c5(),["SharedCodec3"]:c6(),["SharedCodec71"]:c7(),["UpdateAPIKeyRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
