import { d8135 as c0, d8133 as c20, d8134 as c23 } from '../descriptors/data/358.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8944 as c1 } from '../descriptors/data/403.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8945 as c2, d8946 as c5, d8947 as c6, d8948 as c8, d8949 as c9, d8950 as c10, d8951 as c13, d8952 as c14, d8953 as c15, d8954 as c18, d8955 as c19, d8956 as c21, d8957 as c22 } from '../descriptors/data/404.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d288 as c3 } from '../descriptors/data/14.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8996 as c4, d8997 as c12, d8999 as c16, d8998 as c24, d8994 as c25 } from '../descriptors/data/407.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8679 as c7, d8680 as c26 } from '../descriptors/data/388.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8035 as c11 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9000 as c17 } from '../descriptors/data/408.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d288 as d288 } from '../descriptors/data/14.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d288;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliveryFulfillmentDetails"]:c1(),["CreateDigitalFulfillmentDetails"]:c2(),["CreateFulfillmentRequestLocalDelivery"]:c3(),["CreatePackageItemRequest"]:c4(),["CreatePickupFulfillmentDetails"]:c5(),["CreateServiceFulfillmentDetails"]:c6(),["DimensionsRequest"]:c7(),["FulfillmentLineItemRequest"]:c8(),["FulfillmentPackagingRequest"]:c9(),["FulfillmentRecipientRequest"]:c10(),["MetadataRequest"]:c11(),["ReturnShipmentLineItemAllocationRequest"]:c12(),["SharedCodec1252"]:c13(),["SharedCodec1253"]:c14(),["SharedCodec1254"]:c15(),["SharedCodec1255"]:c16(),["SharedCodec1256"]:c17(),["SharedCodec1260"]:c18(),["SharedCodec1261"]:c19(),["SharedCodec2"]:c20(),["SharedCodec2824"]:c21(),["SharedCodec2825"]:c22(),["SharedCodec3"]:c23(),["SharedCodec508"]:c24(),["SinglePackageCreateRequest"]:c25(),["WeightRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequestLocalDelivery(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
