import { d6418 as c0, d6419 as c1, d6420 as c4, d6422 as c5, d6423 as c8, d6424 as c9 } from '../descriptors/data/300.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d273 as c2 } from '../descriptors/data/15.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4299 as c3 } from '../descriptors/data/180.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4439 as c6, d4440 as c7, d4429 as c10 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c11 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6430 as c12, d6431 as c13 } from '../descriptors/data/301.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1920 as c14 } from '../descriptors/data/83.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6453 as c15, d6454 as c16, d6455 as c18 } from '../descriptors/data/303.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1952 as c17 } from '../descriptors/data/84.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4578 as c19 } from '../descriptors/data/196.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4362 as c20 } from '../descriptors/data/184.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d273 as d273 } from '../descriptors/data/15.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d273;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateProductOptionRequest"]:c0(),["CreateProductOptionValueRequest"]:c1(),["CreateProductRequest"]:c2(),["Dimensions"]:c3(),["GiftCardCustomAmountBoundsRequest"]:c4(),["GiftCardProductConfigurationRequest"]:c5(),["ImageInputFile"]:c6(),["ImageInputSourceURL"]:c7(),["ImageRequest"]:c8(),["InventoryItemCreateRequest"]:c9(),["MetadataRequest"]:c10(),["MoneyValue"]:c11(),["ProductVariantRequest"]:c12(),["ProductVariantSelectedOptionRequest"]:c13(),["SharedCodec289"]:c14(),["SharedCodec290"]:c15(),["SharedCodec291"]:c16(),["SharedCodec292"]:c17(),["SharedCodec293"]:c18(),["SharedCodec604"]:c19(),["Weight"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateProductRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
