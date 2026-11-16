import { d8976 as c0, d8977 as c1, d8978 as c5, d8973 as c9 } from '../descriptors/data/432.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6754 as c2, d6755 as c3, d6744 as c6, d6746 as c10, d6747 as c11, d6745 as c12 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6761 as c4, d6766 as c13 } from '../descriptors/data/304.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c7 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8986 as c8 } from '../descriptors/data/433.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8669 as c14, d8670 as c15, d8671 as c16, d8672 as c17 } from '../descriptors/data/413.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6510 as c18 } from '../descriptors/data/285.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6510 as d6510 } from '../descriptors/data/285.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6510;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBoundsRequest"]:c0(),["GiftCardProductConfigurationRequest"]:c1(),["ImageInputFile"]:c2(),["ImageInputSourceURL"]:c3(),["ImageRequest"]:c4(),["InventoryItemCreateRequest"]:c5(),["MetadataRequest"]:c6(),["MoneyValue"]:c7(),["ProductVariantSelectedOptionRequest"]:c8(),["QuantityPriceBreakRequest"]:c9(),["SharedCodec2404"]:c10(),["SharedCodec2405"]:c11(),["SharedCodec2406"]:c12(),["SharedCodec2408"]:c13(),["SharedCodec2469"]:c14(),["SharedCodec2470"]:c15(),["SharedCodec2471"]:c16(),["SharedCodec2472"]:c17(),["UpdateProductVariantRequest"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductVariantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
