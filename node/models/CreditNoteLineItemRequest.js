import { d3394 as c0, d3396 as c3, d3397 as c4, d3398 as c5, d3399 as c6 } from '../descriptors/data/137.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3319 as c1 } from '../descriptors/data/134.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3013 as c2 } from '../descriptors/data/116.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3319 as d3319 } from '../descriptors/data/134.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3319;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteCorrectionRequest"]:c0(),["CreditNoteLineItemRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec240"]:c3(),["SharedCodec241"]:c4(),["SharedCodec242"]:c5(),["SharedCodec243"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreditNoteLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
