import { d3480 as c0 } from '../descriptors/data/143.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c1 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4775 as c2 } from '../descriptors/data/216.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d906 as c3 } from '../descriptors/data/42.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4782 as c4, d4786 as c5, d4787 as c6, d4788 as c7, d4797 as c8, d4798 as c9, d4799 as c10, d4801 as c11, d4802 as c12 } from '../descriptors/data/217.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d906 as d906 } from '../descriptors/data/42.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d906;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerContactRequest"]:c0(),["MoneyValue"]:c1(),["OrderGiftCardAllocationAcceptance"]:c2(),["PayOrderRequestPay"]:c3(),["PaymentSourceCredential"]:c4(),["SharedCodec1012"]:c5(),["SharedCodec1013"]:c6(),["SharedCodec1014"]:c7(),["SharedCodec1080"]:c8(),["SharedCodec1081"]:c9(),["SharedCodec1082"]:c10(),["SharedCodec1084"]:c11(),["SharedCodec1085"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
