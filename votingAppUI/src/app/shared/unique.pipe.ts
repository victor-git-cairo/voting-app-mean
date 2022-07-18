import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'; 

@Pipe({
  name: 'unique',
  pure: false
})
export class UniquePipe implements PipeTransform {
  //let unique = [];

  transform(value: any): any{
    // let unique!: any[];
    if(value!== undefined && value!== null){
      if (_.uniq(value)) {
        console.log(true)
        return true
      }
      else {
        //_.push(value);
        _.union(...value);
        console.log(_)
        return false
      }
    }
  }
}