import { d8975 as c0, d8976 as c4, d8978 as c8, d8977 as c12, d8973 as c13 } from '../descriptors/data/401.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8658 as c1, d8659 as c14 } from '../descriptors/data/382.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d817 as c2 } from '../descriptors/data/44.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8014 as c3 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8930 as c5, d8931 as c6, d8932 as c7, d8935 as c10, d8936 as c11 } from '../descriptors/data/398.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8979 as c9 } from '../descriptors/data/402.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d817 as d817 } from '../descriptors/data/44.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d817;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["DimensionsRequest"]:c1(),["FulfillmentItemizedPackagesRequest"]:c2(),["MetadataRequest"]:c3(),["ReturnShipmentLineItemAllocationRequest"]:c4(),["SharedCodec1252"]:c5(),["SharedCodec1253"]:c6(),["SharedCodec1254"]:c7(),["SharedCodec1255"]:c8(),["SharedCodec1256"]:c9(),["SharedCodec2831"]:c10(),["SharedCodec2832"]:c11(),["SharedCodec508"]:c12(),["SinglePackageCreateRequest"]:c13(),["WeightRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentItemizedPackagesRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
