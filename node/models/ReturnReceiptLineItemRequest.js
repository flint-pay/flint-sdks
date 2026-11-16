import { d10288 as c0, d10289 as c2, d10290 as c3, d10291 as c4, d10292 as c5, d10293 as c6, d10294 as c7 } from '../descriptors/data/483.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10304 as c1 } from '../descriptors/data/484.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10288 as d10288 } from '../descriptors/data/483.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10288;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemRequest"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec2664"]:c2(),["SharedCodec2665"]:c3(),["SharedCodec2666"]:c4(),["SharedCodec2671"]:c5(),["SharedCodec2672"]:c6(),["SharedCodec2673"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
