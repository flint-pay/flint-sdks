import { d7976 as c0, d7977 as c1 } from '../descriptors/data/348.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10600 as c2, d10601 as c3, d10610 as c4 } from '../descriptors/data/501.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7988 as c5 } from '../descriptors/data/349.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10614 as c6 } from '../descriptors/data/502.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10614 as d10614 } from '../descriptors/data/502.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10614;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec227"]:c0(),["SharedCodec228"]:c1(),["SharedCodec2886"]:c2(),["SharedCodec2887"]:c3(),["SubscriptionOfferLineItemRequest"]:c4(),["SubscriptionPlanChangeLineItemRequest"]:c5(),["SubscriptionTermsRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionTermsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
