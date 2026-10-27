import { d717 as c0 } from '../descriptors/data/31.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3392 as c1, d3393 as c2 } from '../descriptors/data/137.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3013 as c3 } from '../descriptors/data/116.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4172 as c4 } from '../descriptors/data/178.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d717 as d717 } from '../descriptors/data/31.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d717;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceCollectionInputAutomatic"]:c0(),["InvoicePaymentOptionLimit"]:c1(),["InvoicePaymentPolicy"]:c2(),["MoneyValue"]:c3(),["SharedCodec893"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceCollectionInputAutomatic(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
