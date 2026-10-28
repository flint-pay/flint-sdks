import { d3377 as c0 } from '../descriptors/data/136.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3382 as c2, d3383 as c3, d3384 as c4, d3385 as c5, d3386 as c6, d3387 as c7, d3388 as c8 } from '../descriptors/data/137.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3377 as d3377 } from '../descriptors/data/136.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3377;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecification"]:c0(),["MoneyValue"]:c1(),["SharedCodec927"]:c2(),["SharedCodec928"]:c3(),["SharedCodec929"]:c4(),["SharedCodec930"]:c5(),["SharedCodec931"]:c6(),["SharedCodec932"]:c7(),["SharedCodec933"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleAmountSpecification(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
