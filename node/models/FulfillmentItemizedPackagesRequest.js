import { d9010 as c0, d9011 as c4, d9013 as c8, d9012 as c12, d9008 as c13 } from '../descriptors/data/407.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8691 as c1, d8692 as c14 } from '../descriptors/data/388.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d819 as c2 } from '../descriptors/data/44.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8048 as c3 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8965 as c5, d8966 as c6, d8967 as c7, d8970 as c10, d8971 as c11 } from '../descriptors/data/404.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9014 as c9 } from '../descriptors/data/408.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d819 as d819 } from '../descriptors/data/44.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d819;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["DimensionsRequest"]:c1(),["FulfillmentItemizedPackagesRequest"]:c2(),["MetadataRequest"]:c3(),["ReturnShipmentLineItemAllocationRequest"]:c4(),["SharedCodec1253"]:c5(),["SharedCodec1254"]:c6(),["SharedCodec1255"]:c7(),["SharedCodec1256"]:c8(),["SharedCodec1257"]:c9(),["SharedCodec2832"]:c10(),["SharedCodec2833"]:c11(),["SharedCodec508"]:c12(),["SinglePackageCreateRequest"]:c13(),["WeightRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentItemizedPackagesRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
