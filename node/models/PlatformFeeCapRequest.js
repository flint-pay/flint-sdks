import { d7640 as c0 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9731 as c1 } from '../descriptors/data/448.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9731 as d9731 } from '../descriptors/data/448.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9731;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PlatformFeeCapRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePlatformFeeCapRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
