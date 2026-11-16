import { d8734 as c0, d8735 as c4, d8737 as c8, d8738 as c9, d8736 as c14, d8732 as c15 } from '../descriptors/data/392.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8406 as c1, d8407 as c16 } from '../descriptors/data/371.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8687 as c2 } from '../descriptors/data/388.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7767 as c3 } from '../descriptors/data/336.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8689 as c5, d8690 as c6, d8691 as c7, d8692 as c10, d8693 as c11, d8694 as c12, d8695 as c13 } from '../descriptors/data/389.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8687 as d8687 } from '../descriptors/data/388.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8687;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["DimensionsRequest"]:c1(),["FulfillmentPackagingRequest"]:c2(),["MetadataRequest"]:c3(),["ReturnShipmentLineItemAllocationRequest"]:c4(),["SharedCodec1244"]:c5(),["SharedCodec1245"]:c6(),["SharedCodec1246"]:c7(),["SharedCodec1247"]:c8(),["SharedCodec1248"]:c9(),["SharedCodec1252"]:c10(),["SharedCodec1253"]:c11(),["SharedCodec2741"]:c12(),["SharedCodec2742"]:c13(),["SharedCodec501"]:c14(),["SinglePackageCreateRequest"]:c15(),["WeightRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentPackagingRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
