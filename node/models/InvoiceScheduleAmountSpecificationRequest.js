import { d9017 as c0 } from '../descriptors/data/406.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7640 as c1 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8085 as c2, d8086 as c3, d8087 as c4, d8088 as c5, d8089 as c6, d8090 as c7, d8091 as c8 } from '../descriptors/data/354.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9017 as d9017 } from '../descriptors/data/406.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9017;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec1653"]:c2(),["SharedCodec1654"]:c3(),["SharedCodec1655"]:c4(),["SharedCodec1656"]:c5(),["SharedCodec1657"]:c6(),["SharedCodec1658"]:c7(),["SharedCodec1659"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleAmountSpecificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
