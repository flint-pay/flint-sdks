import { d124 as c0 } from '../descriptors/data/5.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3394 as c1, d3396 as c4, d3397 as c5, d3398 as c6, d3399 as c7 } from '../descriptors/data/137.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3319 as c2 } from '../descriptors/data/134.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3013 as c3 } from '../descriptors/data/116.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d124 as d124 } from '../descriptors/data/5.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d124;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCreditNoteRequest"]:c0(),["CreditNoteCorrectionRequest"]:c1(),["CreditNoteLineItemRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec240"]:c4(),["SharedCodec241"]:c5(),["SharedCodec242"]:c6(),["SharedCodec243"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCreditNoteRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
