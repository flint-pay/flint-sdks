import { d9719 as c0 } from '../descriptors/data/448.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9719 as d9719 } from '../descriptors/data/448.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9719;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerAppPaymentSplitsRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePartnerAppPaymentSplitsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
