import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    if(!value)return null;
    if(!searchTerm)return value;

    searchTerm = searchTerm.toLowerCase();

    return value.filter(function(data: any){
          return data.firstname.toLowerCase().includes(searchTerm);
        
          
    });
  }
}
