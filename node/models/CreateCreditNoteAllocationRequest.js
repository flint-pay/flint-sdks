import { d183 as c0 } from '../descriptors/data/8.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c1 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d183 as d183 } from '../descriptors/data/8.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d183;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCreditNoteAllocationRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCreditNoteAllocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
