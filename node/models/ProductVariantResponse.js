import { d863 as c0, d885 as c1, d907 as c2, d1770 as c3, d1771 as c4, d1774 as c5, d57 as c6, d1777 as c7, d74 as c8, d1786 as c9, d1785 as c10, d2011 as c11, d2015 as c12, d2121 as c13, d2122 as c14, d2275 as c15, d399 as c16, d403 as c17, d58 as c18, d1776 as c19, d2340 as c20 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2015 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2015;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBounds"]:c0(),["GiftCardProductConfiguration"]:c1(),["Image"]:c2(),["Modifier"]:c3(),["ModifierGroup"]:c4(),["ModifierOverride"]:c5(),["ModifierSet"]:c6(),["ModifierSetGroup"]:c7(),["MoneyValue"]:c8(),["NextAction"]:c9(),["NextActionMerchantAccountSession"]:c10(),["ProductVariant"]:c11(),["ProductVariantResponse"]:c12(),["ResponseMeta"]:c13(),["ResponseWarning"]:c14(),["SelectedProductOption"]:c15(),["SharedCodec145"]:c16(),["SharedCodec146"]:c17(),["SharedCodec15"]:c18(),["SharedCodec478"]:c19(),["TextModifierConfig"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductVariantResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
