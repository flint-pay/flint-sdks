import { d7711 as c0, d7712 as c4, d7713 as c5 } from '../descriptors/data/359.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d310 as c1 } from '../descriptors/data/18.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7383 as c2, d7384 as c6 } from '../descriptors/data/338.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6744 as c3 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d310 as d310 } from '../descriptors/data/18.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d310;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["CreatePackageRequestCreated"]:c1(),["DimensionsRequest"]:c2(),["MetadataRequest"]:c3(),["ReturnShipmentLineItemAllocationRequest"]:c4(),["SharedCodec444"]:c5(),["WeightRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePackageRequestCreated(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
