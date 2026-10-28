import { d184 as c0 } from '../descriptors/data/10.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4234 as c1, d4239 as c7, d4240 as c8, d4241 as c9 } from '../descriptors/data/186.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4259 as c2, d4260 as c3, d4261 as c4, d4262 as c5, d4258 as c6, d4255 as c10, d4256 as c11, d4257 as c12 } from '../descriptors/data/187.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d184 as d184 } from '../descriptors/data/10.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d184;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentCorrectionRequest"]:c0(),["InventoryAdjustmentSetLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec166"]:c3(),["SharedCodec167"]:c4(),["SharedCodec168"]:c5(),["SharedCodec169"]:c6(),["SharedCodec170"]:c7(),["SharedCodec171"]:c8(),["SharedCodec172"]:c9(),["SharedCodec875"]:c10(),["SharedCodec876"]:c11(),["SharedCodec877"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentCorrectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
