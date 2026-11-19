import { d8114 as c0, d8112 as c20, d8113 as c23 } from '../descriptors/data/353.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8923 as c1 } from '../descriptors/data/397.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8924 as c2, d8925 as c5, d8926 as c6, d8927 as c8, d8928 as c9, d8929 as c10, d8930 as c13, d8931 as c14, d8932 as c15, d8933 as c18, d8934 as c19, d8935 as c21, d8936 as c22 } from '../descriptors/data/398.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d286 as c3 } from '../descriptors/data/14.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8975 as c4, d8976 as c12, d8978 as c16, d8970 as c26, d8971 as c27, d8972 as c28, d8977 as c29, d8973 as c30 } from '../descriptors/data/401.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8658 as c7, d8659 as c31 } from '../descriptors/data/382.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8014 as c11 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8979 as c17 } from '../descriptors/data/402.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8968 as c24, d8969 as c25 } from '../descriptors/data/400.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d286 as d286 } from '../descriptors/data/14.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d286;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliveryFulfillmentDetails"]:c1(),["CreateDigitalFulfillmentDetails"]:c2(),["CreateFulfillmentRequest"]:c3(),["CreatePackageItemRequest"]:c4(),["CreatePickupFulfillmentDetails"]:c5(),["CreateServiceFulfillmentDetails"]:c6(),["DimensionsRequest"]:c7(),["FulfillmentLineItemRequest"]:c8(),["FulfillmentPackagingRequest"]:c9(),["FulfillmentRecipientRequest"]:c10(),["MetadataRequest"]:c11(),["ReturnShipmentLineItemAllocationRequest"]:c12(),["SharedCodec1252"]:c13(),["SharedCodec1253"]:c14(),["SharedCodec1254"]:c15(),["SharedCodec1255"]:c16(),["SharedCodec1256"]:c17(),["SharedCodec1260"]:c18(),["SharedCodec1261"]:c19(),["SharedCodec2"]:c20(),["SharedCodec2831"]:c21(),["SharedCodec2832"]:c22(),["SharedCodec3"]:c23(),["SharedCodec414"]:c24(),["SharedCodec415"]:c25(),["SharedCodec416"]:c26(),["SharedCodec417"]:c27(),["SharedCodec418"]:c28(),["SharedCodec508"]:c29(),["SinglePackageCreateRequest"]:c30(),["WeightRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
