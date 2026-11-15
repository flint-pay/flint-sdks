import { d6011 as c0, d6009 as c13, d6010 as c14 } from '../descriptors/data/273.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6826 as c1, d6827 as c2, d6828 as c5, d6829 as c6, d6830 as c8, d6831 as c9 } from '../descriptors/data/319.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d248 as c3 } from '../descriptors/data/12.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6878 as c4, d6879 as c12, d6880 as c22, d6881 as c26, d6882 as c27, d6874 as c28, d6875 as c29, d6876 as c30 } from '../descriptors/data/323.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6550 as c7, d6551 as c31 } from '../descriptors/data/302.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6832 as c10, d6833 as c15, d6834 as c16 } from '../descriptors/data/320.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5911 as c11 } from '../descriptors/data/267.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6863 as c17, d6864 as c18 } from '../descriptors/data/321.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6866 as c19, d6868 as c20, d6869 as c21, d6871 as c23, d6872 as c24, d6873 as c25 } from '../descriptors/data/322.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d248 as d248 } from '../descriptors/data/12.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d248;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliveryFulfillmentDetails"]:c1(),["CreateDigitalFulfillmentDetails"]:c2(),["CreateFulfillmentRequest"]:c3(),["CreatePackageItemRequest"]:c4(),["CreatePickupFulfillmentDetails"]:c5(),["CreateServiceFulfillmentDetails"]:c6(),["DimensionsRequest"]:c7(),["FulfillmentLineItemRequest"]:c8(),["FulfillmentPackagingRequest"]:c9(),["FulfillmentRecipientRequest"]:c10(),["MetadataRequest"]:c11(),["ReturnShipmentLineItemAllocationRequest"]:c12(),["SharedCodec0"]:c13(),["SharedCodec1"]:c14(),["SharedCodec1539"]:c15(),["SharedCodec1540"]:c16(),["SharedCodec261"]:c17(),["SharedCodec262"]:c18(),["SharedCodec263"]:c19(),["SharedCodec264"]:c20(),["SharedCodec265"]:c21(),["SharedCodec354"]:c22(),["SharedCodec746"]:c23(),["SharedCodec747"]:c24(),["SharedCodec748"]:c25(),["SharedCodec749"]:c26(),["SharedCodec750"]:c27(),["SharedCodec751"]:c28(),["SharedCodec752"]:c29(),["SinglePackageCreateRequest"]:c30(),["WeightRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
