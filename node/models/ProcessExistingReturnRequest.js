import { d3250 as c0 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c1 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5247 as c2 } from '../descriptors/data/246.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d941 as c3 } from '../descriptors/data/45.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5255 as c4, d5256 as c5, d5257 as c6, d5258 as c7, d5259 as c8 } from '../descriptors/data/247.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5210 as c9, d5202 as c16, d5203 as c17, d5204 as c18, d5205 as c19, d5206 as c20 } from '../descriptors/data/243.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5150 as c10, d5152 as c11, d5153 as c12, d5154 as c13 } from '../descriptors/data/239.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5265 as c14, d5266 as c15 } from '../descriptors/data/248.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5212 as c21, d5213 as c22, d5214 as c23 } from '../descriptors/data/244.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4258 as c24 } from '../descriptors/data/187.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5295 as c25 } from '../descriptors/data/249.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3435 as c26 } from '../descriptors/data/142.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d941 as d941 } from '../descriptors/data/45.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d941;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["ProcessExistingReturnLineItemRequest"]:c2(),["ProcessExistingReturnRequest"]:c3(),["ReturnProcessDecision"]:c4(),["ReturnProcessDispositionRequest"]:c5(),["ReturnProcessInspectionRequest"]:c6(),["ReturnProcessReceiptRequest"]:c7(),["ReturnProcessResolutionRequest"]:c8(),["ReturnReplacementLineItemRequest"]:c9(),["ReturnSourceSystem"]:c10(),["SharedCodec1146"]:c11(),["SharedCodec1147"]:c12(),["SharedCodec1148"]:c13(),["SharedCodec1149"]:c14(),["SharedCodec1150"]:c15(),["SharedCodec1175"]:c16(),["SharedCodec1176"]:c17(),["SharedCodec1177"]:c18(),["SharedCodec1178"]:c19(),["SharedCodec1179"]:c20(),["SharedCodec1180"]:c21(),["SharedCodec1181"]:c22(),["SharedCodec1182"]:c23(),["SharedCodec169"]:c24(),["SharedCodec245"]:c25(),["SharedCodec52"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
