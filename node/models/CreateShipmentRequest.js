import { d6879 as c0, d6880 as c5, d6881 as c6, d6882 as c9, d6883 as c10 } from '../descriptors/data/321.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d370 as c1 } from '../descriptors/data/23.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6547 as c2, d6548 as c11 } from '../descriptors/data/300.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5918 as c3 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8665 as c4, d8674 as c7, d8675 as c8 } from '../descriptors/data/424.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d370 as d370 } from '../descriptors/data/23.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d370;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["CreateShipmentRequest"]:c1(),["DimensionsRequest"]:c2(),["MetadataRequest"]:c3(),["PackageCreateRequest"]:c4(),["ReturnShipmentLineItemAllocationRequest"]:c5(),["SharedCodec365"]:c6(),["SharedCodec424"]:c7(),["SharedCodec425"]:c8(),["SharedCodec746"]:c9(),["SharedCodec747"]:c10(),["WeightRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateShipmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
