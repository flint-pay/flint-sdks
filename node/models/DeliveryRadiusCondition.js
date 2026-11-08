import { d4955 as c0 } from '../descriptors/data/217.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4982 as c1, d4983 as c2 } from '../descriptors/data/219.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4982 as d4982 } from '../descriptors/data/219.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4982;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryDistance"]:c0(),["DeliveryRadiusCondition"]:c1(),["DeliveryRadiusOrigin"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRadiusCondition(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
