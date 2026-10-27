import { d3394 as c0, d3396 as c4, d3397 as c5, d3398 as c6, d3399 as c7 } from '../descriptors/data/137.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3319 as c1 } from '../descriptors/data/134.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3013 as c2 } from '../descriptors/data/116.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3410 as c3 } from '../descriptors/data/138.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d2434 as c8 } from '../descriptors/data/97.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d2434 as d2434 } from '../descriptors/data/97.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2434;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteCorrectionRequest"]:c0(),["CreditNoteLineItemRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec1174"]:c3(),["SharedCodec240"]:c4(),["SharedCodec241"]:c5(),["SharedCodec242"]:c6(),["SharedCodec243"]:c7(),["UpdateCreditNoteRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCreditNoteRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
