import { d274 as c0 } from '../descriptors/data/13.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d274 as d274 } from '../descriptors/data/13.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d274;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDemoSessionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDemoSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
