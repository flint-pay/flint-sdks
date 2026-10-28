import { d4330 as c0 } from '../descriptors/data/190.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4259 as c1, d4260 as c3, d4261 as c4, d4262 as c5, d4258 as c6, d4255 as c7, d4256 as c8, d4257 as c9 } from '../descriptors/data/187.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d758 as c2 } from '../descriptors/data/35.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4371 as c10, d4372 as c11 } from '../descriptors/data/192.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d758 as d758 } from '../descriptors/data/35.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d758;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["InventoryTransferTransitionRequestCancel"]:c2(),["SharedCodec166"]:c3(),["SharedCodec167"]:c4(),["SharedCodec168"]:c5(),["SharedCodec169"]:c6(),["SharedCodec875"]:c7(),["SharedCodec876"]:c8(),["SharedCodec877"]:c9(),["SharedCodec920"]:c10(),["SharedCodec921"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferTransitionRequestCancel(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
