import { d3168 as c0 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3436 as c1 } from '../descriptors/data/142.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4922 as c2 } from '../descriptors/data/224.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4943 as c3 } from '../descriptors/data/226.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4951 as c4, d4952 as c5, d4954 as c6, d4955 as c7, d4956 as c8, d4957 as c9, d4958 as c10 } from '../descriptors/data/227.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4963 as c11, d4964 as c12, d4965 as c13, d4966 as c14 } from '../descriptors/data/228.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4922 as d4922 } from '../descriptors/data/224.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4922;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTax"]:c1(),["PaymentLinkLineItemRequest"]:c2(),["SharedCodec1055"]:c3(),["SharedCodec1063"]:c4(),["SharedCodec1064"]:c5(),["SharedCodec1066"]:c6(),["SharedCodec1067"]:c7(),["SharedCodec1068"]:c8(),["SharedCodec1069"]:c9(),["SharedCodec1070"]:c10(),["SharedCodec1075"]:c11(),["SharedCodec1076"]:c12(),["SharedCodec1077"]:c13(),["SharedCodec1078"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
