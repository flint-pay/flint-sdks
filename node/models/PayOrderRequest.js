import { d7640 as c0 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9569 as c1, d9573 as c2, d9576 as c5, d9580 as c9, d9581 as c10 } from '../descriptors/data/440.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d1390 as c3 } from '../descriptors/data/69.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9662 as c4, d9663 as c6, d9664 as c8, d9665 as c12, d9666 as c13, d9667 as c14, d9668 as c15, d9669 as c37, d9670 as c38 } from '../descriptors/data/444.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7978 as c7 } from '../descriptors/data/348.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8754 as c11 } from '../descriptors/data/393.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9588 as c16, d9589 as c17, d9590 as c18, d9591 as c19, d9592 as c20, d9593 as c21, d9594 as c22, d9595 as c23, d9596 as c24, d9597 as c25, d9598 as c26, d9599 as c27, d9600 as c28, d9601 as c29, d9602 as c30, d9603 as c31, d9604 as c32, d9605 as c33, d9606 as c34, d9607 as c35, d9608 as c36 } from '../descriptors/data/441.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d1390 as d1390 } from '../descriptors/data/69.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1390;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequest"]:c3(),["PaymentSourceCredential"]:c4(),["PaymentSourceCredentialStripePaymentMethod"]:c5(),["PaymentSplitRequest"]:c6(),["PlatformFeeRequest"]:c7(),["ReaderPaymentSourceTip"]:c8(),["SharedCodec1866"]:c9(),["SharedCodec1867"]:c10(),["SharedCodec211"]:c11(),["SharedCodec2182"]:c12(),["SharedCodec2183"]:c13(),["SharedCodec2184"]:c14(),["SharedCodec2185"]:c15(),["SharedCodec2204"]:c16(),["SharedCodec2205"]:c17(),["SharedCodec2206"]:c18(),["SharedCodec2207"]:c19(),["SharedCodec2208"]:c20(),["SharedCodec2209"]:c21(),["SharedCodec2210"]:c22(),["SharedCodec2211"]:c23(),["SharedCodec2212"]:c24(),["SharedCodec2213"]:c25(),["SharedCodec2214"]:c26(),["SharedCodec2215"]:c27(),["SharedCodec2216"]:c28(),["SharedCodec2217"]:c29(),["SharedCodec2218"]:c30(),["SharedCodec2219"]:c31(),["SharedCodec2220"]:c32(),["SharedCodec2221"]:c33(),["SharedCodec2222"]:c34(),["SharedCodec2223"]:c35(),["SharedCodec2224"]:c36(),["SharedCodec325"]:c37(),["SharedCodec327"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
