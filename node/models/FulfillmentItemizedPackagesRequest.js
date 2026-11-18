import { d8974 as c0, d8975 as c4, d8977 as c8, d8976 as c12, d8972 as c13 } from '../descriptors/data/400.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8657 as c1, d8658 as c14 } from '../descriptors/data/381.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d818 as c2 } from '../descriptors/data/44.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8014 as c3 } from '../descriptors/data/346.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8929 as c5, d8930 as c6, d8931 as c7, d8934 as c10, d8935 as c11 } from '../descriptors/data/397.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8978 as c9 } from '../descriptors/data/401.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d818 as d818 } from '../descriptors/data/44.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d818;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["DimensionsRequest"]:c1(),["FulfillmentItemizedPackagesRequest"]:c2(),["MetadataRequest"]:c3(),["ReturnShipmentLineItemAllocationRequest"]:c4(),["SharedCodec1251"]:c5(),["SharedCodec1252"]:c6(),["SharedCodec1253"]:c7(),["SharedCodec1254"]:c8(),["SharedCodec1255"]:c9(),["SharedCodec2831"]:c10(),["SharedCodec2832"]:c11(),["SharedCodec506"]:c12(),["SinglePackageCreateRequest"]:c13(),["WeightRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentItemizedPackagesRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
