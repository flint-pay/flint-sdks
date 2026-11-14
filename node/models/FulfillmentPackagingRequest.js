import { d6880 as c0, d6881 as c4, d6882 as c7, d6883 as c11, d6884 as c12, d6876 as c13, d6877 as c14, d6878 as c15 } from '../descriptors/data/324.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6548 as c1, d6549 as c16 } from '../descriptors/data/303.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6833 as c2 } from '../descriptors/data/320.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c3 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6835 as c5, d6836 as c6 } from '../descriptors/data/321.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6873 as c8, d6874 as c9, d6875 as c10 } from '../descriptors/data/323.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6833 as d6833 } from '../descriptors/data/320.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6833;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["DimensionsRequest"]:c1(),["FulfillmentPackagingRequest"]:c2(),["MetadataRequest"]:c3(),["ReturnShipmentLineItemAllocationRequest"]:c4(),["SharedCodec1551"]:c5(),["SharedCodec1552"]:c6(),["SharedCodec360"]:c7(),["SharedCodec746"]:c8(),["SharedCodec747"]:c9(),["SharedCodec748"]:c10(),["SharedCodec749"]:c11(),["SharedCodec750"]:c12(),["SharedCodec751"]:c13(),["SharedCodec752"]:c14(),["SinglePackageCreateRequest"]:c15(),["WeightRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentPackagingRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
