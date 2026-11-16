import { d8952 as c0 } from '../descriptors/data/403.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8872 as c1, d8868 as c3, d8869 as c4, d8870 as c5, d8873 as c12, d8874 as c13, d8875 as c14, d8871 as c15 } from '../descriptors/data/399.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d1657 as c2 } from '../descriptors/data/82.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8971 as c6, d8972 as c7, d8973 as c8, d8974 as c9, d8975 as c10, d8976 as c11 } from '../descriptors/data/404.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d1657 as d1657 } from '../descriptors/data/82.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1657;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReceiveInventoryTransferRequest"]:c2(),["SharedCodec1373"]:c3(),["SharedCodec1374"]:c4(),["SharedCodec1375"]:c5(),["SharedCodec2457"]:c6(),["SharedCodec2458"]:c7(),["SharedCodec2459"]:c8(),["SharedCodec2460"]:c9(),["SharedCodec2461"]:c10(),["SharedCodec2462"]:c11(),["SharedCodec442"]:c12(),["SharedCodec443"]:c13(),["SharedCodec444"]:c14(),["SharedCodec445"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReceiveInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
