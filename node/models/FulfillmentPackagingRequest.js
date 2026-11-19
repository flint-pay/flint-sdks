import { d8996 as c0, d8997 as c4, d8999 as c8, d8998 as c14, d8994 as c15 } from '../descriptors/data/407.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8679 as c1, d8680 as c16 } from '../descriptors/data/388.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8949 as c2, d8951 as c5, d8952 as c6, d8953 as c7, d8954 as c10, d8955 as c11, d8956 as c12, d8957 as c13 } from '../descriptors/data/404.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8035 as c3 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9000 as c9 } from '../descriptors/data/408.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8949 as d8949 } from '../descriptors/data/404.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8949;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["DimensionsRequest"]:c1(),["FulfillmentPackagingRequest"]:c2(),["MetadataRequest"]:c3(),["ReturnShipmentLineItemAllocationRequest"]:c4(),["SharedCodec1252"]:c5(),["SharedCodec1253"]:c6(),["SharedCodec1254"]:c7(),["SharedCodec1255"]:c8(),["SharedCodec1256"]:c9(),["SharedCodec1260"]:c10(),["SharedCodec1261"]:c11(),["SharedCodec2824"]:c12(),["SharedCodec2825"]:c13(),["SharedCodec508"]:c14(),["SinglePackageCreateRequest"]:c15(),["WeightRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentPackagingRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
