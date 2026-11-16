import { d10598 as c0, d10599 as c1, d10613 as c2 } from '../descriptors/data/501.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10613 as d10613 } from '../descriptors/data/501.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10613;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2884"]:c0(),["SharedCodec2885"]:c1(),["SubscriptionTaxRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
