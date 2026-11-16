import { d226 as c0 } from '../descriptors/data/9.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10679 as c1 } from '../descriptors/data/506.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d226 as d226 } from '../descriptors/data/9.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d226;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConnectTaxConnectionRequest"]:c0(),["SellerTaxAttestationRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConnectTaxConnectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
