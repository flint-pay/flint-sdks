import { d7711 as c0, d7712 as c4, d7713 as c7, d7714 as c11, d7715 as c12, d7709 as c13 } from '../descriptors/data/359.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7383 as c1, d7384 as c14 } from '../descriptors/data/338.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d671 as c2 } from '../descriptors/data/37.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6744 as c3 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7666 as c5, d7667 as c6 } from '../descriptors/data/356.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7704 as c8, d7705 as c9, d7706 as c10 } from '../descriptors/data/358.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d671 as d671 } from '../descriptors/data/37.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d671;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["DimensionsRequest"]:c1(),["FulfillmentSinglePackageRequest"]:c2(),["MetadataRequest"]:c3(),["ReturnShipmentLineItemAllocationRequest"]:c4(),["SharedCodec2202"]:c5(),["SharedCodec2203"]:c6(),["SharedCodec444"]:c7(),["SharedCodec970"]:c8(),["SharedCodec971"]:c9(),["SharedCodec972"]:c10(),["SharedCodec973"]:c11(),["SharedCodec974"]:c12(),["SinglePackageCreateRequest"]:c13(),["WeightRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentSinglePackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
