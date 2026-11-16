import { d7711 as c0, d7712 as c4, d7713 as c5 } from '../descriptors/data/359.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7383 as c1, d7384 as c6 } from '../descriptors/data/338.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6744 as c2 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1069 as c3 } from '../descriptors/data/53.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1069 as d1069 } from '../descriptors/data/53.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1069;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["DimensionsRequest"]:c1(),["MetadataRequest"]:c2(),["PackageCreateInputShipped"]:c3(),["ReturnShipmentLineItemAllocationRequest"]:c4(),["SharedCodec444"]:c5(),["WeightRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageCreateInputShipped(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
