import { d6878 as c0, d6879 as c4, d6880 as c7, d6881 as c11, d6882 as c12, d6874 as c13, d6875 as c14, d6876 as c15 } from '../descriptors/data/323.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6550 as c1, d6551 as c16 } from '../descriptors/data/302.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6831 as c2 } from '../descriptors/data/319.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5911 as c3 } from '../descriptors/data/267.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6833 as c5, d6834 as c6 } from '../descriptors/data/320.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6871 as c8, d6872 as c9, d6873 as c10 } from '../descriptors/data/322.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6831 as d6831 } from '../descriptors/data/319.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6831;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["DimensionsRequest"]:c1(),["FulfillmentPackagingRequest"]:c2(),["MetadataRequest"]:c3(),["ReturnShipmentLineItemAllocationRequest"]:c4(),["SharedCodec1539"]:c5(),["SharedCodec1540"]:c6(),["SharedCodec354"]:c7(),["SharedCodec746"]:c8(),["SharedCodec747"]:c9(),["SharedCodec748"]:c10(),["SharedCodec749"]:c11(),["SharedCodec750"]:c12(),["SharedCodec751"]:c13(),["SharedCodec752"]:c14(),["SinglePackageCreateRequest"]:c15(),["WeightRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentPackagingRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
