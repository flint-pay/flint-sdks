import { d8197 as c0 } from '../descriptors/data/360.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8197 as d8197 } from '../descriptors/data/360.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8197;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerInstructionsConfigRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerInstructionsConfigRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
