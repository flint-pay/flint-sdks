import { d3557 as c0, d3569 as c1, d3570 as c2, d3571 as c3, d3572 as c4, d3573 as c5, d3574 as c6 } from '../descriptors/data/146.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3608 as c7 } from '../descriptors/data/148.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3557 as d3557 } from '../descriptors/data/146.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3557;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorRequest"]:c0(),["SharedCodec100"]:c1(),["SharedCodec101"]:c2(),["SharedCodec102"]:c3(),["SharedCodec103"]:c4(),["SharedCodec104"]:c5(),["SharedCodec105"]:c6(),["SharedCodec99"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
