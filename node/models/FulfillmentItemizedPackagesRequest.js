import { d8824 as c0, d8825 as c4, d8827 as c8, d8828 as c9, d8826 as c12, d8822 as c13 } from '../descriptors/data/395.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8496 as c1, d8497 as c14 } from '../descriptors/data/374.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d814 as c2 } from '../descriptors/data/44.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7857 as c3 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8779 as c5, d8780 as c6, d8781 as c7, d8784 as c10, d8785 as c11 } from '../descriptors/data/392.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d814 as d814 } from '../descriptors/data/44.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d814;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["DimensionsRequest"]:c1(),["FulfillmentItemizedPackagesRequest"]:c2(),["MetadataRequest"]:c3(),["ReturnShipmentLineItemAllocationRequest"]:c4(),["SharedCodec1275"]:c5(),["SharedCodec1276"]:c6(),["SharedCodec1277"]:c7(),["SharedCodec1278"]:c8(),["SharedCodec1279"]:c9(),["SharedCodec2818"]:c10(),["SharedCodec2819"]:c11(),["SharedCodec521"]:c12(),["SinglePackageCreateRequest"]:c13(),["WeightRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentItemizedPackagesRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
