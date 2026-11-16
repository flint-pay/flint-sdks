import { d10174 as c0 } from '../descriptors/data/476.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7767 as c1 } from '../descriptors/data/336.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10174 as d10174 } from '../descriptors/data/476.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10174;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnDispositionRequestInspectionLine"]:c0(),["MetadataRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnDispositionRequestInspectionLine(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
