import { d192 as c0 } from '../descriptors/data/8.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4868 as c1 } from '../descriptors/data/213.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4429 as c2 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d192 as d192 } from '../descriptors/data/8.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d192;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryLocationSetRequest"]:c0(),["DeliveryLocationSetConfiguration"]:c1(),["MetadataRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryLocationSetRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
