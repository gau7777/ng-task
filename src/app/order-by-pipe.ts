import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

    transform(array: Array<Object>, args: string[]) {

        array =array.length? array : [];

        if (typeof args === 'undefined' || args.length !== 2) {
            return array;
        }

        const key=args[0], direction = args[1];

        if (direction !== 'ASC' && direction !== 'DESC') {
            return array;
        }

        return _.orderBy(array, key, direction.toLowerCase());
    }
}