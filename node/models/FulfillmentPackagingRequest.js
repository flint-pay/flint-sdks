import { d9008 as c0, d9009 as c4, d9011 as c8, d9010 as c14, d9006 as c15 } from '../descriptors/data/406.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8689 as c1, d8690 as c16 } from '../descriptors/data/387.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8961 as c2, d8963 as c5, d8964 as c6, d8965 as c7, d8966 as c10, d8967 as c11, d8968 as c12, d8969 as c13 } from '../descriptors/data/403.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8046 as c3 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9012 as c9 } from '../descriptors/data/407.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8961 as d8961 } from '../descriptors/data/403.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8961;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["DimensionsRequest"]:c1(),["FulfillmentPackagingRequest"]:c2(),["MetadataRequest"]:c3(),["ReturnShipmentLineItemAllocationRequest"]:c4(),["SharedCodec1253"]:c5(),["SharedCodec1254"]:c6(),["SharedCodec1255"]:c7(),["SharedCodec1256"]:c8(),["SharedCodec1257"]:c9(),["SharedCodec1261"]:c10(),["SharedCodec1262"]:c11(),["SharedCodec2830"]:c12(),["SharedCodec2831"]:c13(),["SharedCodec508"]:c14(),["SinglePackageCreateRequest"]:c15(),["WeightRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentPackagingRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
