import { d3250 as c0 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c1 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5259 as c2 } from '../descriptors/data/247.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5210 as c3, d5202 as c4, d5203 as c5, d5204 as c6, d5205 as c7, d5206 as c8 } from '../descriptors/data/243.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5212 as c9, d5213 as c10, d5214 as c11 } from '../descriptors/data/244.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5295 as c12 } from '../descriptors/data/249.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3435 as c13 } from '../descriptors/data/142.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5259 as d5259 } from '../descriptors/data/247.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5259;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["ReturnProcessResolutionRequest"]:c2(),["ReturnReplacementLineItemRequest"]:c3(),["SharedCodec1175"]:c4(),["SharedCodec1176"]:c5(),["SharedCodec1177"]:c6(),["SharedCodec1178"]:c7(),["SharedCodec1179"]:c8(),["SharedCodec1180"]:c9(),["SharedCodec1181"]:c10(),["SharedCodec1182"]:c11(),["SharedCodec245"]:c12(),["SharedCodec52"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
