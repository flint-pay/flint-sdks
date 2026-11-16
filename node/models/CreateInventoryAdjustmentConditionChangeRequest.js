import { d298 as c0 } from '../descriptors/data/15.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8842 as c1, d8847 as c6, d8848 as c7, d8849 as c8, d8850 as c9, d8851 as c10 } from '../descriptors/data/398.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8872 as c2, d8868 as c3, d8869 as c4, d8870 as c5, d8873 as c11, d8874 as c12, d8875 as c13, d8871 as c14 } from '../descriptors/data/399.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d298 as d298 } from '../descriptors/data/15.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d298;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentConditionChangeRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1373"]:c3(),["SharedCodec1374"]:c4(),["SharedCodec1375"]:c5(),["SharedCodec1376"]:c6(),["SharedCodec1377"]:c7(),["SharedCodec1378"]:c8(),["SharedCodec1379"]:c9(),["SharedCodec1380"]:c10(),["SharedCodec442"]:c11(),["SharedCodec443"]:c12(),["SharedCodec444"]:c13(),["SharedCodec445"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentConditionChangeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
