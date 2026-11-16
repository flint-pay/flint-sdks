import { d6908 as c0, d6909 as c4, d6910 as c5, d6911 as c6, d6912 as c7 } from '../descriptors/data/324.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6580 as c1, d6581 as c8 } from '../descriptors/data/303.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c2 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8695 as c3 } from '../descriptors/data/427.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8695 as d8695 } from '../descriptors/data/427.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8695;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["DimensionsRequest"]:c1(),["MetadataRequest"]:c2(),["PackageCreateRequest"]:c3(),["ReturnShipmentLineItemAllocationRequest"]:c4(),["SharedCodec354"]:c5(),["SharedCodec749"]:c6(),["SharedCodec750"]:c7(),["WeightRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageCreateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
