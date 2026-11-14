import { d6020 as c0, d6018 as c13, d6019 as c14 } from '../descriptors/data/271.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6827 as c1, d6828 as c2, d6829 as c5, d6830 as c6, d6831 as c8, d6832 as c9 } from '../descriptors/data/317.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d256 as c3 } from '../descriptors/data/13.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6879 as c4, d6880 as c12, d6881 as c17, d6882 as c21, d6883 as c22, d6875 as c23, d6876 as c24, d6877 as c25 } from '../descriptors/data/321.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6547 as c7, d6548 as c26 } from '../descriptors/data/300.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6833 as c10, d6834 as c15, d6835 as c16 } from '../descriptors/data/318.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5918 as c11 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6872 as c18, d6873 as c19, d6874 as c20 } from '../descriptors/data/320.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d256 as d256 } from '../descriptors/data/13.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d256;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliveryFulfillmentDetails"]:c1(),["CreateDigitalFulfillmentDetails"]:c2(),["CreateFulfillmentRequestService"]:c3(),["CreatePackageItemRequest"]:c4(),["CreatePickupFulfillmentDetails"]:c5(),["CreateServiceFulfillmentDetails"]:c6(),["DimensionsRequest"]:c7(),["FulfillmentLineItemRequest"]:c8(),["FulfillmentPackagingRequest"]:c9(),["FulfillmentRecipientRequest"]:c10(),["MetadataRequest"]:c11(),["ReturnShipmentLineItemAllocationRequest"]:c12(),["SharedCodec0"]:c13(),["SharedCodec1"]:c14(),["SharedCodec1556"]:c15(),["SharedCodec1557"]:c16(),["SharedCodec365"]:c17(),["SharedCodec743"]:c18(),["SharedCodec744"]:c19(),["SharedCodec745"]:c20(),["SharedCodec746"]:c21(),["SharedCodec747"]:c22(),["SharedCodec748"]:c23(),["SharedCodec749"]:c24(),["SinglePackageCreateRequest"]:c25(),["WeightRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequestService(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
