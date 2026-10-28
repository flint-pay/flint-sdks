import { d255 as c0 } from '../descriptors/data/16.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c1 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5210 as c2, d5211 as c3, d5202 as c5, d5203 as c6, d5204 as c7, d5205 as c8, d5206 as c9 } from '../descriptors/data/243.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4658 as c4, d4659 as c13 } from '../descriptors/data/210.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5212 as c10, d5213 as c11, d5214 as c12, d5215 as c14 } from '../descriptors/data/244.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3435 as c15 } from '../descriptors/data/142.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d255 as d255 } from '../descriptors/data/16.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d255;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionPreviewRequestStandard"]:c0(),["MoneyValue"]:c1(),["ReturnReplacementLineItemRequest"]:c2(),["ReturnResolutionAdjustmentRequest"]:c3(),["ReturnResolutionLineItemRequest"]:c4(),["SharedCodec1175"]:c5(),["SharedCodec1176"]:c6(),["SharedCodec1177"]:c7(),["SharedCodec1178"]:c8(),["SharedCodec1179"]:c9(),["SharedCodec1180"]:c10(),["SharedCodec1181"]:c11(),["SharedCodec1182"]:c12(),["SharedCodec17"]:c13(),["SharedCodec241"]:c14(),["SharedCodec52"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionPreviewRequestStandard(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
