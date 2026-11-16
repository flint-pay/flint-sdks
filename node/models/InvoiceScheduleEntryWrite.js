import { d9017 as c0, d9018 as c1, d9019 as c2 } from '../descriptors/data/406.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7640 as c3 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8085 as c4, d8086 as c5, d8087 as c6, d8088 as c7, d8089 as c8, d8090 as c9, d8091 as c10 } from '../descriptors/data/354.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9037 as c11, d9038 as c12, d9039 as c13, d9040 as c14, d9041 as c15, d9042 as c16, d9043 as c17, d9044 as c18, d9045 as c19, d9046 as c20, d9047 as c21, d9048 as c22, d9049 as c23, d9050 as c24, d9051 as c25, d9052 as c26 } from '../descriptors/data/407.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9053 as c27, d9054 as c28 } from '../descriptors/data/408.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9019 as d9019 } from '../descriptors/data/406.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9019;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRequest"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWrite"]:c2(),["MoneyValue"]:c3(),["SharedCodec1653"]:c4(),["SharedCodec1654"]:c5(),["SharedCodec1655"]:c6(),["SharedCodec1656"]:c7(),["SharedCodec1657"]:c8(),["SharedCodec1658"]:c9(),["SharedCodec1659"]:c10(),["SharedCodec1674"]:c11(),["SharedCodec1675"]:c12(),["SharedCodec1676"]:c13(),["SharedCodec1677"]:c14(),["SharedCodec1678"]:c15(),["SharedCodec1683"]:c16(),["SharedCodec1684"]:c17(),["SharedCodec1685"]:c18(),["SharedCodec1686"]:c19(),["SharedCodec1687"]:c20(),["SharedCodec1688"]:c21(),["SharedCodec1689"]:c22(),["SharedCodec1690"]:c23(),["SharedCodec1691"]:c24(),["SharedCodec1692"]:c25(),["SharedCodec1693"]:c26(),["SharedCodec1694"]:c27(),["SharedCodec1695"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
