import { d3250 as c0 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c1 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5247 as c2 } from '../descriptors/data/246.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5255 as c3, d5256 as c4, d5257 as c5, d5259 as c6 } from '../descriptors/data/247.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5210 as c7, d5202 as c10, d5203 as c11, d5204 as c12, d5205 as c13, d5206 as c14 } from '../descriptors/data/243.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5265 as c8, d5266 as c9 } from '../descriptors/data/248.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5212 as c15, d5213 as c16, d5214 as c17 } from '../descriptors/data/244.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5295 as c18 } from '../descriptors/data/249.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3435 as c19 } from '../descriptors/data/142.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5247 as d5247 } from '../descriptors/data/246.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5247;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["ProcessExistingReturnLineItemRequest"]:c2(),["ReturnProcessDecision"]:c3(),["ReturnProcessDispositionRequest"]:c4(),["ReturnProcessInspectionRequest"]:c5(),["ReturnProcessResolutionRequest"]:c6(),["ReturnReplacementLineItemRequest"]:c7(),["SharedCodec1149"]:c8(),["SharedCodec1150"]:c9(),["SharedCodec1175"]:c10(),["SharedCodec1176"]:c11(),["SharedCodec1177"]:c12(),["SharedCodec1178"]:c13(),["SharedCodec1179"]:c14(),["SharedCodec1180"]:c15(),["SharedCodec1181"]:c16(),["SharedCodec1182"]:c17(),["SharedCodec245"]:c18(),["SharedCodec52"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
