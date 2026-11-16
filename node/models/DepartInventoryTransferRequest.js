import { d727 as c0 } from '../descriptors/data/40.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8952 as c1, d8959 as c3, d8960 as c4 } from '../descriptors/data/403.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8872 as c2, d8868 as c5, d8869 as c6, d8870 as c7, d8873 as c8, d8874 as c9, d8875 as c10, d8871 as c11 } from '../descriptors/data/399.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d727 as d727 } from '../descriptors/data/40.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d727;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DepartInventoryTransferRequest"]:c0(),["InventoryProvenanceRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1091"]:c3(),["SharedCodec1092"]:c4(),["SharedCodec1373"]:c5(),["SharedCodec1374"]:c6(),["SharedCodec1375"]:c7(),["SharedCodec442"]:c8(),["SharedCodec443"]:c9(),["SharedCodec444"]:c10(),["SharedCodec445"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDepartInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
