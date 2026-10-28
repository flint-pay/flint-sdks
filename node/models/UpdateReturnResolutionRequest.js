import { d3251 as c0 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c1 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5202 as c2, d5203 as c3, d5204 as c4, d5205 as c5, d5206 as c6 } from '../descriptors/data/243.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3348 as c7 } from '../descriptors/data/137.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3600 as c8 } from '../descriptors/data/151.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5230 as c9, d5231 as c10, d5232 as c11, d5233 as c12, d5234 as c13, d5239 as c15, d5240 as c16, d5241 as c17 } from '../descriptors/data/245.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3435 as c14 } from '../descriptors/data/142.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2637 as c18 } from '../descriptors/data/111.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2637 as d2637 } from '../descriptors/data/111.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2637;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataPatchRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec1175"]:c2(),["SharedCodec1176"]:c3(),["SharedCodec1177"]:c4(),["SharedCodec1178"]:c5(),["SharedCodec1179"]:c6(),["SharedCodec1256"]:c7(),["SharedCodec1257"]:c8(),["SharedCodec1311"]:c9(),["SharedCodec1312"]:c10(),["SharedCodec1313"]:c11(),["SharedCodec1314"]:c12(),["SharedCodec1315"]:c13(),["SharedCodec52"]:c14(),["UpdateReturnReplacementLineItemRequest"]:c15(),["UpdateReturnResolutionAdjustmentRequest"]:c16(),["UpdateReturnResolutionLineItemRequest"]:c17(),["UpdateReturnResolutionRequest"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
