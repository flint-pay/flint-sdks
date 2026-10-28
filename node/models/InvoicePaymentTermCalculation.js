import { d3529 as c0, d3535 as c1, d3536 as c2 } from '../descriptors/data/147.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3537 as c3, d3538 as c4, d3539 as c5, d3540 as c6, d3541 as c7, d3542 as c8, d3543 as c9, d3544 as c10, d3545 as c11 } from '../descriptors/data/148.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3529 as d3529 } from '../descriptors/data/147.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3529;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculation"]:c0(),["SharedCodec953"]:c1(),["SharedCodec954"]:c2(),["SharedCodec955"]:c3(),["SharedCodec956"]:c4(),["SharedCodec957"]:c5(),["SharedCodec958"]:c6(),["SharedCodec959"]:c7(),["SharedCodec960"]:c8(),["SharedCodec961"]:c9(),["SharedCodec962"]:c10(),["SharedCodec963"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
