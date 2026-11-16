import { d8842 as c0, d8847 as c1, d8848 as c2, d8849 as c3, d8850 as c4, d8851 as c5 } from '../descriptors/data/398.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8842 as d8842 } from '../descriptors/data/398.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8842;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAdjustmentConditionChangeLineRequest"]:c0(),["SharedCodec1376"]:c1(),["SharedCodec1377"]:c2(),["SharedCodec1378"]:c3(),["SharedCodec1379"]:c4(),["SharedCodec1380"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustmentConditionChangeLineRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
