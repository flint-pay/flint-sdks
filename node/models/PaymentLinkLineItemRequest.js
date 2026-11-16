import { d7640 as c0 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7985 as c1 } from '../descriptors/data/348.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9843 as c2 } from '../descriptors/data/455.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9868 as c3 } from '../descriptors/data/456.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9873 as c4, d9874 as c5, d9876 as c6, d9877 as c7, d9878 as c8, d9879 as c9, d9880 as c10 } from '../descriptors/data/457.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9885 as c11, d9886 as c12 } from '../descriptors/data/458.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9887 as c13, d9888 as c14 } from '../descriptors/data/459.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9843 as d9843 } from '../descriptors/data/455.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9843;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemRequest"]:c2(),["SharedCodec2083"]:c3(),["SharedCodec2088"]:c4(),["SharedCodec2089"]:c5(),["SharedCodec2091"]:c6(),["SharedCodec2107"]:c7(),["SharedCodec2108"]:c8(),["SharedCodec2109"]:c9(),["SharedCodec2110"]:c10(),["SharedCodec2117"]:c11(),["SharedCodec2118"]:c12(),["SharedCodec2119"]:c13(),["SharedCodec2120"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
