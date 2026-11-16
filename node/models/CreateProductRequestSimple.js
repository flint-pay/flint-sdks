import { d326 as c0 } from '../descriptors/data/19.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6580 as c1, d6581 as c15 } from '../descriptors/data/303.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8173 as c2, d8174 as c3, d8175 as c7, d8182 as c10 } from '../descriptors/data/397.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5951 as c4, d5952 as c5, d5941 as c8 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5958 as c6 } from '../descriptors/data/269.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c9 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8183 as c11 } from '../descriptors/data/398.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8170 as c12 } from '../descriptors/data/396.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8199 as c13, d8200 as c14 } from '../descriptors/data/399.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d326 as d326 } from '../descriptors/data/19.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d326;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateProductRequestSimple"]:c0(),["DimensionsRequest"]:c1(),["GiftCardCustomAmountBoundsRequest"]:c2(),["GiftCardProductConfigurationRequest"]:c3(),["ImageInputFile"]:c4(),["ImageInputSourceURL"]:c5(),["ImageRequest"]:c6(),["InventoryItemCreateRequest"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["ProductVariantRequest"]:c10(),["ProductVariantSelectedOptionRequest"]:c11(),["QuantityPriceBreakRequest"]:c12(),["SharedCodec378"]:c13(),["SharedCodec379"]:c14(),["WeightRequest"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateProductRequestSimple(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
