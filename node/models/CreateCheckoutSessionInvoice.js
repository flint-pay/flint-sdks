import { d7974 as c0, d7971 as c2, d7972 as c3, d7973 as c4 } from '../descriptors/data/348.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d239 as c1 } from '../descriptors/data/10.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7820 as c5, d7821 as c6, d7822 as c7, d7824 as c8, d7825 as c9 } from '../descriptors/data/339.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d239 as d239 } from '../descriptors/data/10.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d239;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateCheckoutSessionInvoice"]:c1(),["SharedCodec341"]:c2(),["SharedCodec342"]:c3(),["SharedCodec343"]:c4(),["SharedCodec344"]:c5(),["SharedCodec345"]:c6(),["SharedCodec346"]:c7(),["SharedCodec347"]:c8(),["SharedCodec348"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionInvoice(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
