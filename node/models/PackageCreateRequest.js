import { d7711 as c0, d7712 as c4, d7713 as c5, d7714 as c6, d7715 as c7 } from '../descriptors/data/359.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7383 as c1, d7384 as c8 } from '../descriptors/data/338.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6744 as c2 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9498 as c3 } from '../descriptors/data/462.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9498 as d9498 } from '../descriptors/data/462.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9498;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["DimensionsRequest"]:c1(),["MetadataRequest"]:c2(),["PackageCreateRequest"]:c3(),["ReturnShipmentLineItemAllocationRequest"]:c4(),["SharedCodec444"]:c5(),["SharedCodec973"]:c6(),["SharedCodec974"]:c7(),["WeightRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageCreateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
