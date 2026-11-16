import { d398 as c0 } from '../descriptors/data/24.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7719 as c1, d7720 as c4, d7721 as c5 } from '../descriptors/data/332.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7695 as c2 } from '../descriptors/data/331.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10440 as c3, d10441 as c6, d10442 as c7 } from '../descriptors/data/492.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d398 as d398 } from '../descriptors/data/24.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d398;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSandboxRequest"]:c0(),["SharedCodec332"]:c1(),["SharedCodec5"]:c2(),["SharedCodec564"]:c3(),["SharedCodec565"]:c4(),["SharedCodec566"]:c5(),["SharedCodec567"]:c6(),["SharedCodec568"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSandboxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
