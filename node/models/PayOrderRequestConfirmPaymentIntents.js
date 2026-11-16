import { d7640 as c0 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9569 as c1, d9573 as c2, d9580 as c6, d9581 as c7 } from '../descriptors/data/440.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d1391 as c3 } from '../descriptors/data/69.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9662 as c4, d9664 as c5, d9665 as c8, d9666 as c9, d9667 as c10, d9668 as c11, d9669 as c21, d9670 as c22 } from '../descriptors/data/444.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9589 as c12, d9590 as c13, d9591 as c14, d9599 as c15, d9600 as c16, d9601 as c17, d9602 as c18, d9603 as c19, d9604 as c20 } from '../descriptors/data/441.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d1391 as d1391 } from '../descriptors/data/69.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1391;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequestConfirmPaymentIntents"]:c3(),["PaymentSourceCredential"]:c4(),["ReaderPaymentSourceTip"]:c5(),["SharedCodec1866"]:c6(),["SharedCodec1867"]:c7(),["SharedCodec2182"]:c8(),["SharedCodec2183"]:c9(),["SharedCodec2184"]:c10(),["SharedCodec2185"]:c11(),["SharedCodec2205"]:c12(),["SharedCodec2206"]:c13(),["SharedCodec2207"]:c14(),["SharedCodec2215"]:c15(),["SharedCodec2216"]:c16(),["SharedCodec2217"]:c17(),["SharedCodec2218"]:c18(),["SharedCodec2219"]:c19(),["SharedCodec2220"]:c20(),["SharedCodec325"]:c21(),["SharedCodec327"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestConfirmPaymentIntents(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
