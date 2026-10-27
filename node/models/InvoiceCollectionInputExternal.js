import { d719 as c0 } from '../descriptors/data/31.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3392 as c1, d3393 as c2 } from '../descriptors/data/137.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3013 as c3 } from '../descriptors/data/116.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3365 as c4, d3366 as c5 } from '../descriptors/data/136.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d719 as d719 } from '../descriptors/data/31.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d719;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceCollectionInputExternal"]:c0(),["InvoicePaymentOptionLimit"]:c1(),["InvoicePaymentPolicy"]:c2(),["MoneyValue"]:c3(),["SharedCodec891"]:c4(),["SharedCodec892"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceCollectionInputExternal(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
