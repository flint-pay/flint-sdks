import { d302 as c0, d614 as c1, d608 as c2, d598 as c3, d606 as c4, d607 as c5, d610 as c6, d609 as c7, d611 as c8, d613 as c9, d612 as c10, d600 as c11 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d302 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d302;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["Dimensions"]:c3(),["SharedCodec192"]:c4(),["SharedCodec193"]:c5(),["SharedCodec194"]:c6(),["SharedCodec195"]:c7(),["SharedCodec196"]:c8(),["SharedCodec197"]:c9(),["SharedCodec198"]:c10(),["Weight"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
