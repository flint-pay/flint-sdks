import { d74 as c0, d1786 as c1, d1785 as c2, d1906 as c3, d1907 as c4, d1908 as c5, d2121 as c6, d2122 as c7 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1908 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1908;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PartnerAuthorizePreview"]:c3(),["PartnerAuthorizePreviewPermission"]:c4(),["PartnerAuthorizePreviewResponse"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePartnerAuthorizePreviewResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
