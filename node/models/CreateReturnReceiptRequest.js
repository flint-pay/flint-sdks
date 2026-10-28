import { d251 as c0 } from '../descriptors/data/15.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5261 as c1 } from '../descriptors/data/247.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5150 as c2, d5152 as c4, d5153 as c5, d5154 as c6 } from '../descriptors/data/239.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5228 as c3 } from '../descriptors/data/245.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5269 as c7, d5270 as c8, d5271 as c9, d5272 as c10, d5273 as c11, d5274 as c12 } from '../descriptors/data/248.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4258 as c13 } from '../descriptors/data/187.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d251 as d251 } from '../descriptors/data/15.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d251;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptRequest"]:c0(),["ReturnReceiptLineItemRequest"]:c1(),["ReturnSourceSystem"]:c2(),["ReturnUnverifiedItem"]:c3(),["SharedCodec1146"]:c4(),["SharedCodec1147"]:c5(),["SharedCodec1148"]:c6(),["SharedCodec1169"]:c7(),["SharedCodec1170"]:c8(),["SharedCodec1171"]:c9(),["SharedCodec1172"]:c10(),["SharedCodec1173"]:c11(),["SharedCodec1174"]:c12(),["SharedCodec169"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
