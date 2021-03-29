import { Attribute } from './attribute'

export class Employee {
    empId: number;
    empName: string;
    empDateOfBirth: Date;
    empHasCar: boolean;
    empAddress: string;
    empLatitude: string;
    empLongitude: string;
    attributeList: Attribute[];
}
