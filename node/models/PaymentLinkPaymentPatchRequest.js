import { d9845 as c0 } from '../descriptors/data/455.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9845 as d9845 } from '../descriptors/data/455.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9845;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkPaymentPatchRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkPaymentPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
