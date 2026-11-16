import { d9015 as c0 } from '../descriptors/data/406.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8070 as c1, d8071 as c2, d8073 as c3, d8075 as c4 } from '../descriptors/data/353.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9030 as c5, d9031 as c6, d9032 as c7, d9033 as c8, d9034 as c9, d9035 as c10, d9036 as c11 } from '../descriptors/data/407.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9015 as d9015 } from '../descriptors/data/406.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9015;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueRequest"]:c0(),["SharedCodec1598"]:c1(),["SharedCodec1599"]:c2(),["SharedCodec1601"]:c3(),["SharedCodec1603"]:c4(),["SharedCodec1606"]:c5(),["SharedCodec1607"]:c6(),["SharedCodec1614"]:c7(),["SharedCodec1615"]:c8(),["SharedCodec1616"]:c9(),["SharedCodec1617"]:c10(),["SharedCodec1618"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
