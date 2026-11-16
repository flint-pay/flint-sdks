import { d586 as c0 } from '../descriptors/data/33.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8307 as c1, d8308 as c2 } from '../descriptors/data/366.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8336 as c3, d8337 as c4, d8339 as c5 } from '../descriptors/data/367.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d586 as d586 } from '../descriptors/data/33.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d586;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputPickupLocationCollection"]:c0(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet"]:c1(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations"]:c2(),["SharedCodec395"]:c3(),["SharedCodec396"]:c4(),["SharedCodec398"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorInputPickupLocationCollection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
