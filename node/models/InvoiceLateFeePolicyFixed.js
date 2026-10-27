import { d722 as c0 } from '../descriptors/data/31.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3342 as c2 } from '../descriptors/data/135.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d722 as d722 } from '../descriptors/data/31.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d722;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicyFixed"]:c0(),["MoneyValue"]:c1(),["SharedCodec17"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceLateFeePolicyFixed(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
