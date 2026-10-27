import { d3082 as c0 } from '../descriptors/data/120.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4085 as c1, d4086 as c17, d4087 as c18, d4088 as c19 } from '../descriptors/data/174.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3013 as c2 } from '../descriptors/data/116.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3647 as c3, d3648 as c11, d3649 as c12, d3650 as c13, d3651 as c14 } from '../descriptors/data/150.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3251 as c4, d3254 as c15, d3250 as c16 } from '../descriptors/data/130.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d5136 as c5, d5137 as c6, d5138 as c7, d5139 as c8 } from '../descriptors/data/235.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3094 as c9 } from '../descriptors/data/121.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3410 as c10 } from '../descriptors/data/138.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3216 as c20 } from '../descriptors/data/128.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3043 as c21 } from '../descriptors/data/118.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d5147 as c22 } from '../descriptors/data/236.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d2499 as c23 } from '../descriptors/data/101.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d2499 as d2499 } from '../descriptors/data/101.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2499;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageRequest"]:c0(),["InventoryRoutingSourceRequest"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifierRequest"]:c3(),["OrderLineItemTax"]:c4(),["SharedCodec1150"]:c5(),["SharedCodec1151"]:c6(),["SharedCodec1152"]:c7(),["SharedCodec1153"]:c8(),["SharedCodec1173"]:c9(),["SharedCodec1174"]:c10(),["SharedCodec168"]:c11(),["SharedCodec169"]:c12(),["SharedCodec170"]:c13(),["SharedCodec171"]:c14(),["SharedCodec37"]:c15(),["SharedCodec38"]:c16(),["SharedCodec859"]:c17(),["SharedCodec860"]:c18(),["SharedCodec861"]:c19(),["SubscriptionIntervalOption"]:c20(),["TextModifierRequest"]:c21(),["UpdateSubscriptionPlanLineItemRequest"]:c22(),["UpdateSubscriptionPlanRequest"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
