import { d6580 as c0, d6581 as c12 } from '../descriptors/data/303.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8173 as c1, d8174 as c2, d8175 as c6, d8182 as c9 } from '../descriptors/data/397.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5951 as c3, d5952 as c4, d5941 as c7 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5958 as c5 } from '../descriptors/data/269.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c8 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8183 as c10 } from '../descriptors/data/398.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8170 as c11 } from '../descriptors/data/396.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8182 as d8182 } from '../descriptors/data/397.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8182;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DimensionsRequest"]:c0(),["GiftCardCustomAmountBoundsRequest"]:c1(),["GiftCardProductConfigurationRequest"]:c2(),["ImageInputFile"]:c3(),["ImageInputSourceURL"]:c4(),["ImageRequest"]:c5(),["InventoryItemCreateRequest"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["ProductVariantRequest"]:c9(),["ProductVariantSelectedOptionRequest"]:c10(),["QuantityPriceBreakRequest"]:c11(),["WeightRequest"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductVariantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
