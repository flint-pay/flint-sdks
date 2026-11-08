import { d346 as c0 } from '../descriptors/data/20.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4795 as c1 } from '../descriptors/data/209.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d346 as d346 } from '../descriptors/data/20.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d346;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteCorrectionRequestQuantity"]:c0(),["SharedCodec342"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreditNoteCorrectionRequestQuantity(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
