import { d9008 as c0, d9009 as c4, d9011 as c8, d9010 as c12, d9006 as c13 } from '../descriptors/data/406.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8689 as c1, d8690 as c14 } from '../descriptors/data/387.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d829 as c2 } from '../descriptors/data/45.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8046 as c3 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8963 as c5, d8964 as c6, d8965 as c7, d8968 as c10, d8969 as c11 } from '../descriptors/data/403.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9012 as c9 } from '../descriptors/data/407.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d829 as d829 } from '../descriptors/data/45.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d829;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["DimensionsRequest"]:c1(),["FulfillmentSinglePackageRequest"]:c2(),["MetadataRequest"]:c3(),["ReturnShipmentLineItemAllocationRequest"]:c4(),["SharedCodec1253"]:c5(),["SharedCodec1254"]:c6(),["SharedCodec1255"]:c7(),["SharedCodec1256"]:c8(),["SharedCodec1257"]:c9(),["SharedCodec2830"]:c10(),["SharedCodec2831"]:c11(),["SharedCodec508"]:c12(),["SinglePackageCreateRequest"]:c13(),["WeightRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentSinglePackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
