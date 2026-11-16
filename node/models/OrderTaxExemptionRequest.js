import { d8177 as c0 } from '../descriptors/data/359.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9089 as c1 } from '../descriptors/data/409.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9097 as c2, d9098 as c3, d9099 as c4, d9100 as c5, d9101 as c6, d9102 as c7, d9103 as c8 } from '../descriptors/data/410.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8012 as c9, d8013 as c10, d8014 as c11, d8015 as c12 } from '../descriptors/data/350.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9089 as d9089 } from '../descriptors/data/409.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9089;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["OrderTaxExemptionRequest"]:c1(),["SharedCodec1910"]:c2(),["SharedCodec1911"]:c3(),["SharedCodec1912"]:c4(),["SharedCodec1913"]:c5(),["SharedCodec1917"]:c6(),["SharedCodec1918"]:c7(),["SharedCodec1919"]:c8(),["SharedCodec676"]:c9(),["SharedCodec677"]:c10(),["SharedCodec678"]:c11(),["SharedCodec679"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
