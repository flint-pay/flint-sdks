import { d748 as c0 } from '../descriptors/data/32.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3387 as c2, d3388 as c3 } from '../descriptors/data/137.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d748 as d748 } from '../descriptors/data/32.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d748;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecificationRemainingBalance"]:c0(),["MoneyValue"]:c1(),["SharedCodec932"]:c2(),["SharedCodec933"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleAmountSpecificationRemainingBalance(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
