import { d3528 as c0, d3529 as c1, d3530 as c3, d3531 as c4, d3532 as c5, d3533 as c6, d3534 as c7, d3535 as c8, d3536 as c9 } from '../descriptors/data/147.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c2 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3537 as c10, d3538 as c11, d3539 as c12, d3540 as c13, d3541 as c14, d3542 as c15, d3543 as c16, d3544 as c17, d3545 as c18 } from '../descriptors/data/148.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2601 as c19 } from '../descriptors/data/108.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2601 as d2601 } from '../descriptors/data/108.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2601;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["InvoicePaymentTermCalculation"]:c1(),["MoneyValue"]:c2(),["SharedCodec24"]:c3(),["SharedCodec25"]:c4(),["SharedCodec26"]:c5(),["SharedCodec27"]:c6(),["SharedCodec28"]:c7(),["SharedCodec953"]:c8(),["SharedCodec954"]:c9(),["SharedCodec955"]:c10(),["SharedCodec956"]:c11(),["SharedCodec957"]:c12(),["SharedCodec958"]:c13(),["SharedCodec959"]:c14(),["SharedCodec960"]:c15(),["SharedCodec961"]:c16(),["SharedCodec962"]:c17(),["SharedCodec963"]:c18(),["UpdateInvoicePaymentTermRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
