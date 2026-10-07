import { d64 as c0, d65 as c1, d77 as c2, d1824 as c3, d1823 as c4, d2158 as c5, d2159 as c6, d2313 as c7, d14 as c8, d63 as c9, d1822 as c10 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d65 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d65;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["BundleComponentListResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SelectedProductOption"]:c7(),["SharedCodec1"]:c8(),["SharedCodec17"]:c9(),["SharedCodec488"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBundleComponentListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
