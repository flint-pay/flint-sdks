import { d383 as c0 } from '../descriptors/data/23.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10288 as c1, d10289 as c7, d10290 as c8, d10291 as c9, d10292 as c10, d10293 as c11, d10294 as c12 } from '../descriptors/data/483.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10198 as c2, d10201 as c4, d10202 as c5, d10203 as c6 } from '../descriptors/data/477.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10304 as c3 } from '../descriptors/data/484.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8871 as c13 } from '../descriptors/data/399.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d383 as d383 } from '../descriptors/data/23.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d383;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptRequest"]:c0(),["ReturnReceiptLineItemRequest"]:c1(),["ReturnSourceSystemRequest"]:c2(),["ReturnUnverifiedItem"]:c3(),["SharedCodec2590"]:c4(),["SharedCodec2591"]:c5(),["SharedCodec2592"]:c6(),["SharedCodec2664"]:c7(),["SharedCodec2665"]:c8(),["SharedCodec2666"]:c9(),["SharedCodec2671"]:c10(),["SharedCodec2672"]:c11(),["SharedCodec2673"]:c12(),["SharedCodec445"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
