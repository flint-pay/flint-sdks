import { d3480 as c0 } from '../descriptors/data/143.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c1 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4775 as c2, d4777 as c3 } from '../descriptors/data/216.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d904 as c4 } from '../descriptors/data/42.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4782 as c5, d4783 as c6, d4786 as c7, d4787 as c8, d4788 as c9, d4789 as c10, d4790 as c11, d4791 as c12, d4792 as c13, d4797 as c14, d4798 as c15, d4799 as c16, d4800 as c17, d4801 as c18, d4802 as c19, d4803 as c20, d4804 as c21 } from '../descriptors/data/217.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4805 as c22 } from '../descriptors/data/218.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d904 as d904 } from '../descriptors/data/42.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d904;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerContactRequest"]:c0(),["MoneyValue"]:c1(),["OrderGiftCardAllocationAcceptance"]:c2(),["OrderPaymentIntentSelection"]:c3(),["PayOrderRequest"]:c4(),["PaymentSourceCredential"]:c5(),["PaymentSourceCredentialToken"]:c6(),["SharedCodec1012"]:c7(),["SharedCodec1013"]:c8(),["SharedCodec1014"]:c9(),["SharedCodec1016"]:c10(),["SharedCodec1017"]:c11(),["SharedCodec1018"]:c12(),["SharedCodec1019"]:c13(),["SharedCodec1080"]:c14(),["SharedCodec1081"]:c15(),["SharedCodec1082"]:c16(),["SharedCodec1083"]:c17(),["SharedCodec1084"]:c18(),["SharedCodec1085"]:c19(),["SharedCodec1086"]:c20(),["SharedCodec1087"]:c21(),["SharedCodec1088"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
