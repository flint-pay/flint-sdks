import { d4330 as c0 } from '../descriptors/data/190.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4259 as c1, d4260 as c3, d4261 as c4, d4262 as c5, d4258 as c6, d4255 as c7, d4256 as c8, d4257 as c9 } from '../descriptors/data/187.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d757 as c2 } from '../descriptors/data/35.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4354 as c10, d4355 as c11, d4356 as c12, d4357 as c13, d4358 as c14, d4359 as c15, d4360 as c16, d4361 as c17, d4362 as c18, d4363 as c19 } from '../descriptors/data/191.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4364 as c20, d4365 as c21, d4366 as c22, d4367 as c23, d4368 as c24, d4369 as c25, d4370 as c26, d4371 as c27, d4372 as c28 } from '../descriptors/data/192.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d757 as d757 } from '../descriptors/data/35.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d757;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["InventoryTransferTransitionRequest"]:c2(),["SharedCodec166"]:c3(),["SharedCodec167"]:c4(),["SharedCodec168"]:c5(),["SharedCodec169"]:c6(),["SharedCodec875"]:c7(),["SharedCodec876"]:c8(),["SharedCodec877"]:c9(),["SharedCodec903"]:c10(),["SharedCodec904"]:c11(),["SharedCodec905"]:c12(),["SharedCodec906"]:c13(),["SharedCodec907"]:c14(),["SharedCodec908"]:c15(),["SharedCodec909"]:c16(),["SharedCodec910"]:c17(),["SharedCodec911"]:c18(),["SharedCodec912"]:c19(),["SharedCodec913"]:c20(),["SharedCodec914"]:c21(),["SharedCodec915"]:c22(),["SharedCodec916"]:c23(),["SharedCodec917"]:c24(),["SharedCodec918"]:c25(),["SharedCodec919"]:c26(),["SharedCodec920"]:c27(),["SharedCodec921"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
