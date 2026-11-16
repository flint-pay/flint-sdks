import { d6617 as c0 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8546 as c1, d8550 as c2, d8557 as c6, d8558 as c7 } from '../descriptors/data/407.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1102 as c3 } from '../descriptors/data/54.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8639 as c4, d8641 as c5, d8642 as c8, d8643 as c9, d8644 as c10, d8645 as c11, d8646 as c21, d8647 as c22 } from '../descriptors/data/411.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8566 as c12, d8567 as c13, d8568 as c14, d8576 as c15, d8577 as c16, d8578 as c17, d8579 as c18, d8580 as c19, d8581 as c20 } from '../descriptors/data/408.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1102 as d1102 } from '../descriptors/data/54.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1102;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequestConfirmPaymentIntents"]:c3(),["PaymentSourceCredential"]:c4(),["ReaderPaymentSourceTip"]:c5(),["SharedCodec1472"]:c6(),["SharedCodec1473"]:c7(),["SharedCodec1710"]:c8(),["SharedCodec1711"]:c9(),["SharedCodec1712"]:c10(),["SharedCodec1713"]:c11(),["SharedCodec1729"]:c12(),["SharedCodec1730"]:c13(),["SharedCodec1731"]:c14(),["SharedCodec1739"]:c15(),["SharedCodec1740"]:c16(),["SharedCodec1741"]:c17(),["SharedCodec1742"]:c18(),["SharedCodec1743"]:c19(),["SharedCodec1744"]:c20(),["SharedCodec268"]:c21(),["SharedCodec270"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestConfirmPaymentIntents(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
