import { d8564 as c0, d8565 as c1, d8569 as c7, d8570 as c9, d8571 as c10, d8572 as c11, d8573 as c12, d8574 as c13, d8575 as c14, d8576 as c15, d8577 as c16 } from '../descriptors/data/378.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d235 as c2 } from '../descriptors/data/10.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8484 as c3 } from '../descriptors/data/373.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8485 as c4, d8490 as c5, d8486 as c20, d8491 as c21, d8492 as c22, d8487 as c23, d8488 as c24 } from '../descriptors/data/374.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d556 as c6 } from '../descriptors/data/31.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c8 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8578 as c17, d8579 as c18, d8580 as c19 } from '../descriptors/data/379.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d235 as d235 } from '../descriptors/data/10.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d235;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryMethodResultRequest"]:c0(),["CallerSuppliedDeliveryOutcomeRequest"]:c1(),["CreateCheckoutDeliveryQuoteRequest"]:c2(),["DeliveryAddressRequest"]:c3(),["DeliveryBuyerLocationRequest"]:c4(),["DeliveryCoordinateRequest"]:c5(),["DeliveryInventoryAssignmentRequest"]:c6(),["DeliveryWindowRequest"]:c7(),["MoneyValue"]:c8(),["SharedCodec201"]:c9(),["SharedCodec202"]:c10(),["SharedCodec203"]:c11(),["SharedCodec204"]:c12(),["SharedCodec205"]:c13(),["SharedCodec206"]:c14(),["SharedCodec207"]:c15(),["SharedCodec208"]:c16(),["SharedCodec209"]:c17(),["SharedCodec210"]:c18(),["SharedCodec211"]:c19(),["SharedCodec750"]:c20(),["SharedCodec756"]:c21(),["SharedCodec757"]:c22(),["SharedCodec758"]:c23(),["SharedCodec759"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutDeliveryQuoteRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
