import { d420 as c0 } from '../descriptors/data/25.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10693 as c1 } from '../descriptors/data/506.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d420 as d420 } from '../descriptors/data/25.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d420;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateTaxRegistrationRequest"]:c0(),["SharedCodec590"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateTaxRegistrationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
