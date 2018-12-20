import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numberToArray'
})

export class NumberToArrayPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        let resp = [];
        if (!(value instanceof Array)) {
            for (let i = 1; i <= value; i++) {
                resp.push(i);
            }
        } else {
            resp = value;
        }
        return resp;
    }
}
