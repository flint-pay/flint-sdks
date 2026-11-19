import { d8146 as c0, d8144 as c20, d8145 as c23 } from '../descriptors/data/357.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8956 as c1 } from '../descriptors/data/402.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8957 as c2, d8958 as c5, d8959 as c6, d8960 as c8, d8961 as c9, d8962 as c10, d8963 as c13, d8964 as c14, d8965 as c15, d8966 as c18, d8967 as c19, d8968 as c21, d8969 as c22 } from '../descriptors/data/403.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d288 as c3 } from '../descriptors/data/14.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9008 as c4, d9009 as c12, d9011 as c16, d9003 as c26, d9004 as c27, d9005 as c28, d9010 as c29, d9006 as c30 } from '../descriptors/data/406.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8689 as c7, d8690 as c31 } from '../descriptors/data/387.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8046 as c11 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9012 as c17 } from '../descriptors/data/407.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9001 as c24, d9002 as c25 } from '../descriptors/data/405.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d288 as d288 } from '../descriptors/data/14.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d288;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliveryFulfillmentDetails"]:c1(),["CreateDigitalFulfillmentDetails"]:c2(),["CreateFulfillmentRequest"]:c3(),["CreatePackageItemRequest"]:c4(),["CreatePickupFulfillmentDetails"]:c5(),["CreateServiceFulfillmentDetails"]:c6(),["DimensionsRequest"]:c7(),["FulfillmentLineItemRequest"]:c8(),["FulfillmentPackagingRequest"]:c9(),["FulfillmentRecipientRequest"]:c10(),["MetadataRequest"]:c11(),["ReturnShipmentLineItemAllocationRequest"]:c12(),["SharedCodec1253"]:c13(),["SharedCodec1254"]:c14(),["SharedCodec1255"]:c15(),["SharedCodec1256"]:c16(),["SharedCodec1257"]:c17(),["SharedCodec1261"]:c18(),["SharedCodec1262"]:c19(),["SharedCodec2"]:c20(),["SharedCodec2830"]:c21(),["SharedCodec2831"]:c22(),["SharedCodec3"]:c23(),["SharedCodec414"]:c24(),["SharedCodec415"]:c25(),["SharedCodec416"]:c26(),["SharedCodec417"]:c27(),["SharedCodec418"]:c28(),["SharedCodec508"]:c29(),["SinglePackageCreateRequest"]:c30(),["WeightRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
