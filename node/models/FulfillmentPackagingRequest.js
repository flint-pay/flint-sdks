import { d6908 as c0, d6909 as c4, d6910 as c7, d6911 as c11, d6912 as c12, d6904 as c13, d6905 as c14, d6906 as c15 } from '../descriptors/data/324.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6580 as c1, d6581 as c16 } from '../descriptors/data/303.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6861 as c2 } from '../descriptors/data/320.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c3 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6863 as c5, d6864 as c6 } from '../descriptors/data/321.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6901 as c8, d6902 as c9, d6903 as c10 } from '../descriptors/data/323.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6861 as d6861 } from '../descriptors/data/320.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6861;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["DimensionsRequest"]:c1(),["FulfillmentPackagingRequest"]:c2(),["MetadataRequest"]:c3(),["ReturnShipmentLineItemAllocationRequest"]:c4(),["SharedCodec1546"]:c5(),["SharedCodec1547"]:c6(),["SharedCodec354"]:c7(),["SharedCodec746"]:c8(),["SharedCodec747"]:c9(),["SharedCodec748"]:c10(),["SharedCodec749"]:c11(),["SharedCodec750"]:c12(),["SharedCodec751"]:c13(),["SharedCodec752"]:c14(),["SinglePackageCreateRequest"]:c15(),["WeightRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentPackagingRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
