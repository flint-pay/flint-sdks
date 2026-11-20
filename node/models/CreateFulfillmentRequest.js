import { d8148 as c0, d8146 as c20, d8147 as c23 } from '../descriptors/data/358.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8958 as c1 } from '../descriptors/data/403.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8959 as c2, d8960 as c5, d8961 as c6, d8962 as c8, d8963 as c9, d8964 as c10, d8965 as c13, d8966 as c14, d8967 as c15, d8968 as c18, d8969 as c19, d8970 as c21, d8971 as c22 } from '../descriptors/data/404.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d288 as c3 } from '../descriptors/data/14.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9010 as c4, d9011 as c12, d9013 as c16, d9005 as c26, d9006 as c27, d9007 as c28, d9012 as c29, d9008 as c30 } from '../descriptors/data/407.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8691 as c7, d8692 as c31 } from '../descriptors/data/388.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8048 as c11 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9014 as c17 } from '../descriptors/data/408.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9003 as c24, d9004 as c25 } from '../descriptors/data/406.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d288 as d288 } from '../descriptors/data/14.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d288;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliveryFulfillmentDetails"]:c1(),["CreateDigitalFulfillmentDetails"]:c2(),["CreateFulfillmentRequest"]:c3(),["CreatePackageItemRequest"]:c4(),["CreatePickupFulfillmentDetails"]:c5(),["CreateServiceFulfillmentDetails"]:c6(),["DimensionsRequest"]:c7(),["FulfillmentLineItemRequest"]:c8(),["FulfillmentPackagingRequest"]:c9(),["FulfillmentRecipientRequest"]:c10(),["MetadataRequest"]:c11(),["ReturnShipmentLineItemAllocationRequest"]:c12(),["SharedCodec1253"]:c13(),["SharedCodec1254"]:c14(),["SharedCodec1255"]:c15(),["SharedCodec1256"]:c16(),["SharedCodec1257"]:c17(),["SharedCodec1261"]:c18(),["SharedCodec1262"]:c19(),["SharedCodec2"]:c20(),["SharedCodec2832"]:c21(),["SharedCodec2833"]:c22(),["SharedCodec3"]:c23(),["SharedCodec414"]:c24(),["SharedCodec415"]:c25(),["SharedCodec416"]:c26(),["SharedCodec417"]:c27(),["SharedCodec418"]:c28(),["SharedCodec508"]:c29(),["SinglePackageCreateRequest"]:c30(),["WeightRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
