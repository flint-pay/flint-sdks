import { d8290 as c0 } from '../descriptors/data/365.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8290 as d8290 } from '../descriptors/data/365.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8290;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRadiusOrigin"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRadiusOrigin(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
