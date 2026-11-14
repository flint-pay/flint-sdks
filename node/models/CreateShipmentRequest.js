import { d6880 as c0, d6881 as c5, d6882 as c6, d6883 as c9, d6884 as c10 } from '../descriptors/data/324.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d369 as c1 } from '../descriptors/data/23.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6548 as c2, d6549 as c11 } from '../descriptors/data/303.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c3 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8673 as c4, d8682 as c7, d8683 as c8 } from '../descriptors/data/427.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d369 as d369 } from '../descriptors/data/23.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d369;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["CreateShipmentRequest"]:c1(),["DimensionsRequest"]:c2(),["MetadataRequest"]:c3(),["PackageCreateRequest"]:c4(),["ReturnShipmentLineItemAllocationRequest"]:c5(),["SharedCodec360"]:c6(),["SharedCodec428"]:c7(),["SharedCodec429"]:c8(),["SharedCodec749"]:c9(),["SharedCodec750"]:c10(),["WeightRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateShipmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
