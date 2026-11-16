import { d7711 as c0, d7712 as c5, d7713 as c6, d7714 as c9, d7715 as c10 } from '../descriptors/data/359.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d368 as c1 } from '../descriptors/data/23.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7383 as c2, d7384 as c11 } from '../descriptors/data/338.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6744 as c3 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9498 as c4 } from '../descriptors/data/462.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9507 as c7, d9508 as c8 } from '../descriptors/data/463.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d368 as d368 } from '../descriptors/data/23.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d368;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["CreateShipmentRequest"]:c1(),["DimensionsRequest"]:c2(),["MetadataRequest"]:c3(),["PackageCreateRequest"]:c4(),["ReturnShipmentLineItemAllocationRequest"]:c5(),["SharedCodec444"]:c6(),["SharedCodec512"]:c7(),["SharedCodec513"]:c8(),["SharedCodec973"]:c9(),["SharedCodec974"]:c10(),["WeightRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateShipmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
