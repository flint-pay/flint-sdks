import { d4706 as c0, d4707 as c1 } from '../descriptors/data/205.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d868 as c2 } from '../descriptors/data/41.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c3 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d868 as d868 } from '../descriptors/data/41.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d868;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteIssueAllocationRequest"]:c0(),["CreditNoteRefundRequest"]:c1(),["IssueCreditNoteRequest"]:c2(),["MoneyValue"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIssueCreditNoteRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
