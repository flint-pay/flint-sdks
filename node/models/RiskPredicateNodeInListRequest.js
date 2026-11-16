import { d10413 as c0 } from '../descriptors/data/491.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10413 as d10413 } from '../descriptors/data/491.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10413;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RiskPredicateNodeInListRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeInListRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
