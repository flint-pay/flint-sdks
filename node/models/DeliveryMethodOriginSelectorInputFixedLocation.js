import { d436 as c0 } from '../descriptors/data/23.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4999 as c1, d5000 as c2 } from '../descriptors/data/220.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d436 as d436 } from '../descriptors/data/23.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d436;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputFixedLocation"]:c0(),["SharedCodec181"]:c1(),["SharedCodec182"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorInputFixedLocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
