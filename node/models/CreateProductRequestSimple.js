import { d326 as c0 } from '../descriptors/data/19.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7383 as c1, d7384 as c15 } from '../descriptors/data/335.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8976 as c2, d8977 as c3, d8978 as c7, d8985 as c10 } from '../descriptors/data/429.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6754 as c4, d6755 as c5, d6744 as c8 } from '../descriptors/data/300.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6761 as c6 } from '../descriptors/data/301.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c9 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8986 as c11 } from '../descriptors/data/430.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8973 as c12 } from '../descriptors/data/428.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9002 as c13, d9003 as c14 } from '../descriptors/data/431.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d326 as d326 } from '../descriptors/data/19.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d326;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateProductRequestSimple"]:c0(),["DimensionsRequest"]:c1(),["GiftCardCustomAmountBoundsRequest"]:c2(),["GiftCardProductConfigurationRequest"]:c3(),["ImageInputFile"]:c4(),["ImageInputSourceURL"]:c5(),["ImageRequest"]:c6(),["InventoryItemCreateRequest"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["ProductVariantRequest"]:c10(),["ProductVariantSelectedOptionRequest"]:c11(),["QuantityPriceBreakRequest"]:c12(),["SharedCodec468"]:c13(),["SharedCodec469"]:c14(),["WeightRequest"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateProductRequestSimple(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
