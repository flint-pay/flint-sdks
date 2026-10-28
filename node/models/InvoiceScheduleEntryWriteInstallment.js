import { d3567 as c0 } from '../descriptors/data/149.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4388 as c1 } from '../descriptors/data/193.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d809 as c2 } from '../descriptors/data/37.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c3 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3572 as c4, d3573 as c5, d3574 as c6, d3575 as c7, d3576 as c8, d3577 as c9, d3578 as c10 } from '../descriptors/data/150.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4433 as c11, d4434 as c12, d4435 as c13, d4436 as c14, d4437 as c15, d4440 as c16, d4443 as c17, d4444 as c18 } from '../descriptors/data/195.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d809 as d809 } from '../descriptors/data/37.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d809;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecification"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWriteInstallment"]:c2(),["MoneyValue"]:c3(),["SharedCodec964"]:c4(),["SharedCodec965"]:c5(),["SharedCodec966"]:c6(),["SharedCodec967"]:c7(),["SharedCodec968"]:c8(),["SharedCodec969"]:c9(),["SharedCodec970"]:c10(),["SharedCodec974"]:c11(),["SharedCodec975"]:c12(),["SharedCodec976"]:c13(),["SharedCodec977"]:c14(),["SharedCodec978"]:c15(),["SharedCodec981"]:c16(),["SharedCodec984"]:c17(),["SharedCodec985"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWriteInstallment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
