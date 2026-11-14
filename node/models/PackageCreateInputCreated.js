import { d6878 as c0, d6879 as c4, d6880 as c5 } from '../descriptors/data/323.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6550 as c1, d6551 as c6 } from '../descriptors/data/302.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5911 as c2 } from '../descriptors/data/267.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d1059 as c3 } from '../descriptors/data/52.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d1059 as d1059 } from '../descriptors/data/52.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1059;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["DimensionsRequest"]:c1(),["MetadataRequest"]:c2(),["PackageCreateInputCreated"]:c3(),["ReturnShipmentLineItemAllocationRequest"]:c4(),["SharedCodec354"]:c5(),["WeightRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageCreateInputCreated(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
