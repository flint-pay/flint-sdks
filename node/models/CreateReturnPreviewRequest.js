import { d4644 as c0, d4645 as c4, d4646 as c5, d4648 as c9, d4649 as c10, d4650 as c11, d4651 as c12, d4652 as c21 } from '../descriptors/data/209.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d245 as c1 } from '../descriptors/data/15.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5189 as c2, d5197 as c24, d5198 as c25, d5199 as c26 } from '../descriptors/data/242.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c3 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5210 as c6, d5211 as c7, d5202 as c13, d5203 as c14, d5204 as c15, d5205 as c16, d5206 as c17, d5200 as c28 } from '../descriptors/data/243.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4658 as c8, d4653 as c22, d4659 as c23 } from '../descriptors/data/210.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5212 as c18, d5213 as c19, d5214 as c20, d5215 as c27, d5216 as c29, d5217 as c30 } from '../descriptors/data/244.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3435 as c31 } from '../descriptors/data/142.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d245 as d245 } from '../descriptors/data/15.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d245;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["CreateReturnPreviewRequest"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["MoneyValue"]:c3(),["ReturnEligibilityLineItemRequest"]:c4(),["ReturnEligibilitySelection"]:c5(),["ReturnReplacementLineItemRequest"]:c6(),["ReturnResolutionAdjustmentRequest"]:c7(),["ReturnResolutionLineItemRequest"]:c8(),["SharedCodec1141"]:c9(),["SharedCodec1142"]:c10(),["SharedCodec1143"]:c11(),["SharedCodec1144"]:c12(),["SharedCodec1175"]:c13(),["SharedCodec1176"]:c14(),["SharedCodec1177"]:c15(),["SharedCodec1178"]:c16(),["SharedCodec1179"]:c17(),["SharedCodec1180"]:c18(),["SharedCodec1181"]:c19(),["SharedCodec1182"]:c20(),["SharedCodec14"]:c21(),["SharedCodec16"]:c22(),["SharedCodec17"]:c23(),["SharedCodec238"]:c24(),["SharedCodec239"]:c25(),["SharedCodec240"]:c26(),["SharedCodec241"]:c27(),["SharedCodec242"]:c28(),["SharedCodec243"]:c29(),["SharedCodec244"]:c30(),["SharedCodec52"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
