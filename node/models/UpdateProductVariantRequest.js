import { d6361 as c0, d6363 as c1, d6364 as c4, d6365 as c5 } from '../descriptors/data/298.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4408 as c2, d4409 as c3, d4398 as c6, d4400 as c9, d4401 as c10, d4399 as c11 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c7 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6372 as c8 } from '../descriptors/data/299.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4424 as c12 } from '../descriptors/data/188.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6146 as c13, d6147 as c14, d6148 as c15, d6149 as c16 } from '../descriptors/data/284.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4547 as c17 } from '../descriptors/data/195.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4191 as c18 } from '../descriptors/data/174.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4191 as d4191 } from '../descriptors/data/174.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4191;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBoundsRequest"]:c0(),["GiftCardProductConfigurationRequest"]:c1(),["ImageInputFile"]:c2(),["ImageInputSourceURL"]:c3(),["ImageRequest"]:c4(),["InventoryItemCreateRequest"]:c5(),["MetadataRequest"]:c6(),["MoneyValue"]:c7(),["ProductVariantSelectedOptionRequest"]:c8(),["SharedCodec1348"]:c9(),["SharedCodec1349"]:c10(),["SharedCodec1350"]:c11(),["SharedCodec1352"]:c12(),["SharedCodec1403"]:c13(),["SharedCodec1404"]:c14(),["SharedCodec1405"]:c15(),["SharedCodec1406"]:c16(),["SharedCodec602"]:c17(),["UpdateProductVariantRequest"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductVariantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
