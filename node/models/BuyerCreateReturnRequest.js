import { d41 as c0 } from '../descriptors/data/1.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1243 as c1 } from '../descriptors/data/58.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d41 as d41 } from '../descriptors/data/1.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d41;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnRequest"]:c0(),["ReturnLineItemRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
