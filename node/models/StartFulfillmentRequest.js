import { d7281 as c0 } from '../descriptors/data/305.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7281 as d7281 } from '../descriptors/data/305.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7281;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["StartFulfillmentRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeStartFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
