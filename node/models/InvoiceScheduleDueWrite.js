import { d9018 as c0 } from '../descriptors/data/406.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9037 as c1, d9038 as c2, d9039 as c3, d9040 as c4, d9041 as c5 } from '../descriptors/data/407.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9018 as d9018 } from '../descriptors/data/406.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9018;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleDueWrite"]:c0(),["SharedCodec1674"]:c1(),["SharedCodec1675"]:c2(),["SharedCodec1676"]:c3(),["SharedCodec1677"]:c4(),["SharedCodec1678"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleDueWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
