import { d184 as c0 } from '../descriptors/data/8.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c1 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d184 as d184 } from '../descriptors/data/8.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d184;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCreditNoteRefundRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCreditNoteRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
