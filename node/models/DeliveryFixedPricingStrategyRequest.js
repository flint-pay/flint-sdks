import { d3555 as c0 } from '../descriptors/data/146.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3555 as d3555 } from '../descriptors/data/146.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3555;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFixedPricingStrategyRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryFixedPricingStrategyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
