import { d405 as c0, d813 as c1, d1447 as c2, d69 as c3, d1861 as c4, d1863 as c5 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d405 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d405;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateProductVariantRequest"]:c0(),["ImageRequest"]:c1(),["InventoryItemCreateRequest"]:c2(),["MoneyValue"]:c3(),["ProductVariantRequest"]:c4(),["ProductVariantSelectedOptionRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateProductVariantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
