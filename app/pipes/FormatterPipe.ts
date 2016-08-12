import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'formatter'
})
export class FormatterPipe implements PipeTransform {
    
  transform(value: any, type?: string): any {
      
    if (value === null || value === undefined || value === NaN || value === 0) 
        return "";
    
    if (type == 'Date' || type == 'ShortTime' || type == 'Time' || type == 'DateTime')
        return this.formatDate(value, type);
        
    return "" + value;
  }
  
  
  private formatDate(value: any, format?:any):any {
      
        let date = this.parseDate(value);
      
	    if (date == null || date.length != 6)
	        return value.toString();
            
	    var year = date[0], month = date[1], day = date[2];
	    var hour = date[3], min = date[4], sec = date[5];

	    if (month < 10)
	        month = '0' + month;

	    if (day < 10)
	        day = '0' + day;

	    if (hour < 10)
	        hour = '0' + hour;

	    if (min < 10)
	        min = '0' + min;

	    if (sec < 10)
	        sec = '0' + sec;

        if (format == 'Date')
            return '' + year + '-' + month + '-' + day;
        else if (format == 'ShortTime')
            return '' + hour + ':' + min;
        else if (format == 'Time')
            return '' + hour + ':' + min + ':' + sec;
	    else
            return '' + year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec;
  }
 
  private parseDate(value:any):any {

    let date = null;
    
    if (value instanceof Date)
        date = value;
    else if (typeof value === "number")
        date = new Date(value);
    else if (typeof value == 'string')
        date = Date.parse(value);

    
    if (date == null)
        return  null;
    
    return [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds()
    ];    
  }
 
  
}