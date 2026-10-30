import { d6359 as c0, d6360 as c1, d6361 as c4, d6363 as c5, d6364 as c8, d6365 as c9 } from '../descriptors/data/298.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d268 as c2 } from '../descriptors/data/15.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4268 as c3 } from '../descriptors/data/179.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4408 as c6, d4409 as c7, d4398 as c10 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c11 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6371 as c12, d6372 as c13 } from '../descriptors/data/299.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1913 as c14 } from '../descriptors/data/82.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6394 as c15, d6395 as c16, d6396 as c18 } from '../descriptors/data/300.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1945 as c17 } from '../descriptors/data/84.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4547 as c19 } from '../descriptors/data/195.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4331 as c20 } from '../descriptors/data/183.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d268 as d268 } from '../descriptors/data/15.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d268;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateProductOptionRequest"]:c0(),["CreateProductOptionValueRequest"]:c1(),["CreateProductRequest"]:c2(),["Dimensions"]:c3(),["GiftCardCustomAmountBoundsRequest"]:c4(),["GiftCardProductConfigurationRequest"]:c5(),["ImageInputFile"]:c6(),["ImageInputSourceURL"]:c7(),["ImageRequest"]:c8(),["InventoryItemCreateRequest"]:c9(),["MetadataRequest"]:c10(),["MoneyValue"]:c11(),["ProductVariantRequest"]:c12(),["ProductVariantSelectedOptionRequest"]:c13(),["SharedCodec287"]:c14(),["SharedCodec288"]:c15(),["SharedCodec289"]:c16(),["SharedCodec290"]:c17(),["SharedCodec291"]:c18(),["SharedCodec602"]:c19(),["Weight"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateProductRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
