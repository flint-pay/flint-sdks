import { d4330 as c0, d4321 as c10, d4322 as c11, d4323 as c12, d4324 as c13, d4325 as c14, d4326 as c15, d4327 as c16, d4328 as c17, d4329 as c18 } from '../descriptors/data/190.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d745 as c1 } from '../descriptors/data/34.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4259 as c2, d4260 as c3, d4261 as c4, d4262 as c5, d4258 as c6, d4255 as c7, d4256 as c8, d4257 as c9 } from '../descriptors/data/187.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d745 as d745 } from '../descriptors/data/34.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d745;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventoryReservationTransitionRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec166"]:c3(),["SharedCodec167"]:c4(),["SharedCodec168"]:c5(),["SharedCodec169"]:c6(),["SharedCodec875"]:c7(),["SharedCodec876"]:c8(),["SharedCodec877"]:c9(),["SharedCodec888"]:c10(),["SharedCodec889"]:c11(),["SharedCodec890"]:c12(),["SharedCodec891"]:c13(),["SharedCodec892"]:c14(),["SharedCodec893"]:c15(),["SharedCodec894"]:c16(),["SharedCodec895"]:c17(),["SharedCodec896"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
