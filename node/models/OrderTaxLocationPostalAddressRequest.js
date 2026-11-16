import { d9092 as c0 } from '../descriptors/data/410.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9092 as d9092 } from '../descriptors/data/410.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9092;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxLocationPostalAddressRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxLocationPostalAddressRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
