import { d4330 as c0 } from '../descriptors/data/190.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4259 as c1, d4260 as c3, d4261 as c4, d4262 as c5, d4258 as c6, d4255 as c7, d4256 as c8, d4257 as c9 } from '../descriptors/data/187.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d760 as c2 } from '../descriptors/data/35.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4358 as c10, d4359 as c11, d4360 as c12, d4361 as c13, d4362 as c14, d4363 as c15 } from '../descriptors/data/191.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d760 as d760 } from '../descriptors/data/35.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d760;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["InventoryTransferTransitionRequestReceive"]:c2(),["SharedCodec166"]:c3(),["SharedCodec167"]:c4(),["SharedCodec168"]:c5(),["SharedCodec169"]:c6(),["SharedCodec875"]:c7(),["SharedCodec876"]:c8(),["SharedCodec877"]:c9(),["SharedCodec907"]:c10(),["SharedCodec908"]:c11(),["SharedCodec909"]:c12(),["SharedCodec910"]:c13(),["SharedCodec911"]:c14(),["SharedCodec912"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferTransitionRequestReceive(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
