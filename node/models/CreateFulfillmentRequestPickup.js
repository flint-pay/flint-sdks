import { d8146 as c0, d8144 as c20, d8145 as c23 } from '../descriptors/data/357.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8956 as c1 } from '../descriptors/data/402.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8957 as c2, d8958 as c5, d8959 as c6, d8960 as c8, d8961 as c9, d8962 as c10, d8963 as c13, d8964 as c14, d8965 as c15, d8966 as c18, d8967 as c19, d8968 as c21, d8969 as c22 } from '../descriptors/data/403.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d291 as c3 } from '../descriptors/data/14.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9008 as c4, d9009 as c12, d9011 as c16, d9010 as c24, d9006 as c25 } from '../descriptors/data/406.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8689 as c7, d8690 as c26 } from '../descriptors/data/387.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8046 as c11 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9012 as c17 } from '../descriptors/data/407.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d291 as d291 } from '../descriptors/data/14.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d291;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliveryFulfillmentDetails"]:c1(),["CreateDigitalFulfillmentDetails"]:c2(),["CreateFulfillmentRequestPickup"]:c3(),["CreatePackageItemRequest"]:c4(),["CreatePickupFulfillmentDetails"]:c5(),["CreateServiceFulfillmentDetails"]:c6(),["DimensionsRequest"]:c7(),["FulfillmentLineItemRequest"]:c8(),["FulfillmentPackagingRequest"]:c9(),["FulfillmentRecipientRequest"]:c10(),["MetadataRequest"]:c11(),["ReturnShipmentLineItemAllocationRequest"]:c12(),["SharedCodec1253"]:c13(),["SharedCodec1254"]:c14(),["SharedCodec1255"]:c15(),["SharedCodec1256"]:c16(),["SharedCodec1257"]:c17(),["SharedCodec1261"]:c18(),["SharedCodec1262"]:c19(),["SharedCodec2"]:c20(),["SharedCodec2830"]:c21(),["SharedCodec2831"]:c22(),["SharedCodec3"]:c23(),["SharedCodec508"]:c24(),["SinglePackageCreateRequest"]:c25(),["WeightRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequestPickup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
