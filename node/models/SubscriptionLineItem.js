import { d60 as c0, d152 as c1, d811 as c2, d69 as c3, d1686 as c4, d2109 as c5, d59 as c6, d2135 as c7, d2174 as c8 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2135 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2135;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["Image"]:c2(),["MoneyValue"]:c3(),["OrderLineItemModifier"]:c4(),["SelectedProductOption"]:c5(),["SharedCodec16"]:c6(),["SubscriptionLineItem"]:c7(),["TextModifierRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
