import { d8704 as c0, d8705 as c6 } from '../descriptors/data/388.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8056 as c1 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8982 as c2, d8983 as c3 } from '../descriptors/data/404.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9024 as c4, d9020 as c5 } from '../descriptors/data/407.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9020 as d9020 } from '../descriptors/data/407.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9020;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DimensionsRequest"]:c0(),["MetadataRequest"]:c1(),["SharedCodec2840"]:c2(),["SharedCodec2841"]:c3(),["SharedCodec512"]:c4(),["SinglePackageCreateRequest"]:c5(),["WeightRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSinglePackageCreateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
