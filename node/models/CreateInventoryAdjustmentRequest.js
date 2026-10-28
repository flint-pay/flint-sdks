import { d187 as c0 } from '../descriptors/data/10.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4230 as c1, d4232 as c2 } from '../descriptors/data/185.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4234 as c3, d4239 as c9, d4240 as c10, d4241 as c11, d4242 as c12, d4243 as c13, d4244 as c14, d4245 as c15, d4246 as c19, d4247 as c20, d4248 as c21, d4249 as c22, d4250 as c23 } from '../descriptors/data/186.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4259 as c4, d4260 as c5, d4261 as c6, d4262 as c7, d4258 as c8, d4255 as c16, d4256 as c17, d4257 as c18 } from '../descriptors/data/187.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d187 as d187 } from '../descriptors/data/10.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d187;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventoryAdjustmentQuantityLineRequest"]:c2(),["InventoryAdjustmentSetLineRequest"]:c3(),["InventorySourceSystemRequest"]:c4(),["SharedCodec166"]:c5(),["SharedCodec167"]:c6(),["SharedCodec168"]:c7(),["SharedCodec169"]:c8(),["SharedCodec170"]:c9(),["SharedCodec171"]:c10(),["SharedCodec172"]:c11(),["SharedCodec173"]:c12(),["SharedCodec174"]:c13(),["SharedCodec175"]:c14(),["SharedCodec176"]:c15(),["SharedCodec875"]:c16(),["SharedCodec876"]:c17(),["SharedCodec877"]:c18(),["SharedCodec878"]:c19(),["SharedCodec879"]:c20(),["SharedCodec880"]:c21(),["SharedCodec881"]:c22(),["SharedCodec882"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
