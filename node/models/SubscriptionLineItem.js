import { d64 as c0, d176 as c1, d926 as c2, d77 as c3, d1872 as c4, d2312 as c5, d63 as c6, d2341 as c7, d2380 as c8 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2341 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2341;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["CategoryReference"]:c1(),["Image"]:c2(),["MoneyValue"]:c3(),["OrderLineItemModifier"]:c4(),["SelectedProductOption"]:c5(),["SharedCodec17"]:c6(),["SubscriptionLineItem"]:c7(),["TextModifierRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
