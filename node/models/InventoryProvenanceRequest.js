import { d8952 as c0 } from '../descriptors/data/403.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8872 as c1, d8868 as c2, d8869 as c3, d8870 as c4, d8873 as c5, d8874 as c6, d8875 as c7, d8871 as c8 } from '../descriptors/data/399.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8952 as d8952 } from '../descriptors/data/403.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8952;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["SharedCodec1373"]:c2(),["SharedCodec1374"]:c3(),["SharedCodec1375"]:c4(),["SharedCodec442"]:c5(),["SharedCodec443"]:c6(),["SharedCodec444"]:c7(),["SharedCodec445"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryProvenanceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
