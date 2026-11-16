import { d7867 as c0, d7865 as c1, d7864 as c3, d7866 as c4 } from '../descriptors/data/342.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7768 as c2 } from '../descriptors/data/336.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9123 as c5, d9124 as c6, d9125 as c7, d9126 as c8 } from '../descriptors/data/411.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7511 as c9 } from '../descriptors/data/316.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7511 as d7511 } from '../descriptors/data/316.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7511;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec2"]:c1(),["SharedCodec2977"]:c2(),["SharedCodec2980"]:c3(),["SharedCodec3"]:c4(),["SharedCodec3023"]:c5(),["SharedCodec3024"]:c6(),["SharedCodec3025"]:c7(),["SharedCodec3026"]:c8(),["UpdateLocationRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
