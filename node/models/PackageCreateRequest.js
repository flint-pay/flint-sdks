import { d9022 as c0, d9023 as c4, d9025 as c5, d9024 as c7 } from '../descriptors/data/407.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8704 as c1, d8705 as c8 } from '../descriptors/data/388.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8056 as c2 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10919 as c3 } from '../descriptors/data/518.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9026 as c6 } from '../descriptors/data/408.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10919 as d10919 } from '../descriptors/data/518.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10919;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["DimensionsRequest"]:c1(),["MetadataRequest"]:c2(),["PackageCreateRequest"]:c3(),["ReturnShipmentLineItemAllocationRequest"]:c4(),["SharedCodec1261"]:c5(),["SharedCodec1262"]:c6(),["SharedCodec512"]:c7(),["WeightRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageCreateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
