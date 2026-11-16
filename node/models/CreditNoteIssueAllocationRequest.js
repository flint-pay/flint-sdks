import { d6970 as c0 } from '../descriptors/data/313.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c1 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6970 as d6970 } from '../descriptors/data/313.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6970;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteIssueAllocationRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreditNoteIssueAllocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
