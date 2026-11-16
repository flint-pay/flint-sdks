import { d348 as c0 } from '../descriptors/data/20.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7767 as c1 } from '../descriptors/data/336.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7640 as c2 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9774 as c3, d9775 as c4 } from '../descriptors/data/450.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9663 as c5 } from '../descriptors/data/444.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7978 as c6 } from '../descriptors/data/348.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8754 as c7 } from '../descriptors/data/393.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9810 as c8, d9811 as c9 } from '../descriptors/data/452.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9812 as c10, d9813 as c11, d9814 as c12, d9815 as c13, d9816 as c14, d9817 as c15, d9818 as c16, d9819 as c17, d9820 as c18, d9821 as c19, d9822 as c20, d9823 as c21, d9824 as c22 } from '../descriptors/data/453.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d348 as d348 } from '../descriptors/data/20.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d348;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePaymentIntentRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["OrderPaymentSourceCardSelection"]:c3(),["OrderPaymentSourceSelection"]:c4(),["PaymentSplitRequest"]:c5(),["PlatformFeeRequest"]:c6(),["SharedCodec211"]:c7(),["SharedCodec506"]:c8(),["SharedCodec507"]:c9(),["SharedCodec508"]:c10(),["SharedCodec509"]:c11(),["SharedCodec510"]:c12(),["SharedCodec511"]:c13(),["SharedCodec512"]:c14(),["SharedCodec513"]:c15(),["SharedCodec514"]:c16(),["SharedCodec515"]:c17(),["SharedCodec516"]:c18(),["SharedCodec517"]:c19(),["SharedCodec518"]:c20(),["SharedCodec519"]:c21(),["SharedCodec520"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
