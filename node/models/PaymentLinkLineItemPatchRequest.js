import { d3013 as c0 } from '../descriptors/data/116.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3251 as c1, d3254 as c8, d3250 as c9 } from '../descriptors/data/130.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4661 as c2 } from '../descriptors/data/207.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4681 as c3, d4682 as c4 } from '../descriptors/data/208.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4683 as c5, d4684 as c6, d4685 as c7 } from '../descriptors/data/209.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4661 as d4661 } from '../descriptors/data/207.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4661;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTax"]:c1(),["PaymentLinkLineItemPatchRequest"]:c2(),["SharedCodec1003"]:c3(),["SharedCodec1004"]:c4(),["SharedCodec1005"]:c5(),["SharedCodec1006"]:c6(),["SharedCodec1007"]:c7(),["SharedCodec37"]:c8(),["SharedCodec38"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
