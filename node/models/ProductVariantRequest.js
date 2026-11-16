import { d7383 as c0, d7384 as c12 } from '../descriptors/data/338.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8976 as c1, d8977 as c2, d8978 as c6, d8973 as c11 } from '../descriptors/data/432.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6754 as c3, d6755 as c4, d6744 as c7 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6761 as c5 } from '../descriptors/data/304.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c8 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8985 as c9, d8986 as c10 } from '../descriptors/data/433.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8985 as d8985 } from '../descriptors/data/433.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8985;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DimensionsRequest"]:c0(),["GiftCardCustomAmountBoundsRequest"]:c1(),["GiftCardProductConfigurationRequest"]:c2(),["ImageInputFile"]:c3(),["ImageInputSourceURL"]:c4(),["ImageRequest"]:c5(),["InventoryItemCreateRequest"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["ProductVariantRequest"]:c9(),["ProductVariantSelectedOptionRequest"]:c10(),["QuantityPriceBreakRequest"]:c11(),["WeightRequest"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductVariantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
