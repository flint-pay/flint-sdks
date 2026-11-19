import { d366 as c0 } from '../descriptors/data/21.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8689 as c1, d8690 as c21 } from '../descriptors/data/387.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10357 as c2, d10358 as c3, d10359 as c7, d10366 as c11 } from '../descriptors/data/486.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8056 as c4, d8057 as c5, d8063 as c6 } from '../descriptors/data/352.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8046 as c8 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c9 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8260 as c10 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10367 as c12, d10370 as c15, d10371 as c16, d10374 as c17, d10375 as c18 } from '../descriptors/data/487.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10354 as c13 } from '../descriptors/data/485.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9067 as c14 } from '../descriptors/data/410.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10391 as c19, d10392 as c20 } from '../descriptors/data/488.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d366 as d366 } from '../descriptors/data/21.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d366;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateProductRequestSimple"]:c0(),["DimensionsRequest"]:c1(),["GiftCardCustomAmountBoundsRequest"]:c2(),["GiftCardProductConfigurationRequest"]:c3(),["ImageInputFile"]:c4(),["ImageInputSourceURL"]:c5(),["ImageRequest"]:c6(),["InventoryItemCreateRequest"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["PlatformFeeMoney"]:c10(),["ProductVariantRequest"]:c11(),["ProductVariantSelectedOptionRequest"]:c12(),["QuantityPriceBreakRequest"]:c13(),["SharedCodec137"]:c14(),["SharedCodec1745"]:c15(),["SharedCodec1746"]:c16(),["SharedCodec2407"]:c17(),["SharedCodec2408"]:c18(),["SharedCodec534"]:c19(),["SharedCodec535"]:c20(),["WeightRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateProductRequestSimple(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
