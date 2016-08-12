
export function DelayedResult<T>(timeout:number, result:T):Promise<T> {

    if (timeout < 1)
        Promise.resolve<T>(result);

    return  new Promise(function (resolve, reject) {
        setTimeout(() => resolve(result), timeout);
    });
}


export function DelayedCallbackResult<T>(timeout:number, callbackResult: () => T):Promise<T> {

    if (timeout < 1)
        Promise.resolve<T>(callbackResult());

    return  new Promise(function (resolve, reject) {
        setTimeout(() => resolve(callbackResult()), timeout);
    });
}



export class ArrayHelper
{
    static remove<T>(array:T[], predicate:(value:T) => boolean): T {

        if (array == null)
            return null;

        for (var i = 0; i < array.length; i++) {
            if (predicate(array[i])) {
                return array.splice(i, 1)[0];
            }
        }

        return null;
    }


    static removeAll<T>(array:T[], predicate:(value:T) => boolean): T[] {

        if (array == null)
            return null;

        var removed = [];

        for (var i = 0; i < array.length;) {

            if (predicate(array[i])) {
                removed.push(array.splice(i, 1));
                continue;
            }

            i++;                
        }

        return removed;
    }


    static findByProperty<T>(array:T[], propName:string, value:any): T {

        if (array == null)
            return null;

        for (var i = 0; i < array.length; i++) {
            let item = array[i];
            if (item != null && item.hasOwnProperty(propName))
                return item;          
        }

        return null;
    }
}


export class StringHelper
{
    static isEmpty(value):boolean {
        if (value === undefined || value === null || typeof value !== 'string')
            return true;
        
        return  value.length == 0;
    }

    static isNotEmpty(value):boolean {
        if (value === undefined || value === null || typeof value !== 'string')
            return false;
        
        return  value.length > 0;
    }
    
}