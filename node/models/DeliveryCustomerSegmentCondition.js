import { d8300 as c0 } from '../descriptors/data/365.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8300 as d8300 } from '../descriptors/data/365.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8300;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCustomerSegmentCondition"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryCustomerSegmentCondition(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
