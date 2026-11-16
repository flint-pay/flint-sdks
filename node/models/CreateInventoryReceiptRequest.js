import { d306 as c0 } from '../descriptors/data/16.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8919 as c1 } from '../descriptors/data/402.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8872 as c2, d8868 as c3, d8869 as c4, d8870 as c5, d8873 as c6, d8874 as c7, d8875 as c8, d8871 as c9 } from '../descriptors/data/399.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d306 as d306 } from '../descriptors/data/16.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d306;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryReceiptRequest"]:c0(),["InventoryReceiptLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1373"]:c3(),["SharedCodec1374"]:c4(),["SharedCodec1375"]:c5(),["SharedCodec442"]:c6(),["SharedCodec443"]:c7(),["SharedCodec444"]:c8(),["SharedCodec445"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
