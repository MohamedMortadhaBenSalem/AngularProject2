import { Pipe, PipeTransform } from '@angular/core';
import { Vetement } from './model/vetement.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: Vetement[], filterText: string): any {
    return list ? list.filter(item =>
      item.nomVetement.toLowerCase().includes(filterText)) : [];
  }
}
