import { d9022 as c0, d9023 as c4, d9025 as c8, d9024 as c12, d9020 as c13 } from '../descriptors/data/407.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8704 as c1, d8705 as c14 } from '../descriptors/data/388.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d829 as c2 } from '../descriptors/data/45.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8056 as c3 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8977 as c5, d8978 as c6, d8979 as c7, d8982 as c10, d8983 as c11 } from '../descriptors/data/404.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9026 as c9 } from '../descriptors/data/408.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d829 as d829 } from '../descriptors/data/45.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d829;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["DimensionsRequest"]:c1(),["FulfillmentSinglePackageRequest"]:c2(),["MetadataRequest"]:c3(),["ReturnShipmentLineItemAllocationRequest"]:c4(),["SharedCodec1258"]:c5(),["SharedCodec1259"]:c6(),["SharedCodec1260"]:c7(),["SharedCodec1261"]:c8(),["SharedCodec1262"]:c9(),["SharedCodec2840"]:c10(),["SharedCodec2841"]:c11(),["SharedCodec512"]:c12(),["SinglePackageCreateRequest"]:c13(),["WeightRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentSinglePackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
