import { d4388 as c0 } from '../descriptors/data/193.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4433 as c1, d4434 as c2, d4435 as c3, d4436 as c4, d4437 as c5 } from '../descriptors/data/195.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4388 as d4388 } from '../descriptors/data/193.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4388;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleDueWrite"]:c0(),["SharedCodec974"]:c1(),["SharedCodec975"]:c2(),["SharedCodec976"]:c3(),["SharedCodec977"]:c4(),["SharedCodec978"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleDueWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
