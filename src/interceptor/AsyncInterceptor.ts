import { InterceptorInterface, Action, Interceptor } from 'routing-controllers';

@Interceptor()
export class AsyncInterceptor implements InterceptorInterface {

    async intercept(action: Action, result: any): Promise<any> {
        if (undefined === action) return result;
        if (undefined === action.next) return result;

        const startAt: [number, number] = process.hrtime();
        await action.next();
        const endAt = process.hrtime();
        console.log('intercept ms: ' + ((endAt[0] - startAt[0]) * 1e3 + (endAt[1] - startAt[1]) * 1e-6).toFixed(3));
        return result;
    }
}