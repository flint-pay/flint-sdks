import { d3345 as c0, d3346 as c8, d3347 as c9 } from '../descriptors/data/137.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5400 as c1, d5401 as c4, d5402 as c5 } from '../descriptors/data/254.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3582 as c2, d3583 as c3 } from '../descriptors/data/150.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5355 as c6 } from '../descriptors/data/252.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c7 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5379 as c10, d5380 as c11, d5381 as c12 } from '../descriptors/data/253.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3636 as c13 } from '../descriptors/data/153.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5355 as d5355 } from '../descriptors/data/252.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5355;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["InvoiceAutopayRetryPolicy"]:c1(),["InvoicePaymentOptionLimit"]:c2(),["InvoicePaymentPolicy"]:c3(),["InvoiceReminderPolicy"]:c4(),["InvoiceReminderRule"]:c5(),["InvoiceSettingsPatch"]:c6(),["MoneyValue"]:c7(),["SharedCodec0"]:c8(),["SharedCodec1"]:c9(),["SharedCodec990"]:c10(),["SharedCodec991"]:c11(),["SharedCodec992"]:c12(),["SharedCodec993"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceSettingsPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
