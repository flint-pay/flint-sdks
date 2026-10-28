import { d4387 as c0 } from '../descriptors/data/193.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3558 as c1, d3559 as c2, d3561 as c3, d3563 as c4 } from '../descriptors/data/149.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4426 as c5, d4427 as c6, d4428 as c7, d4429 as c8, d4430 as c9, d4431 as c10, d4432 as c11 } from '../descriptors/data/195.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4387 as d4387 } from '../descriptors/data/193.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4387;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec940"]:c1(),["SharedCodec941"]:c2(),["SharedCodec943"]:c3(),["SharedCodec945"]:c4(),["SharedCodec946"]:c5(),["SharedCodec947"]:c6(),["SharedCodec948"]:c7(),["SharedCodec949"]:c8(),["SharedCodec950"]:c9(),["SharedCodec951"]:c10(),["SharedCodec952"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
