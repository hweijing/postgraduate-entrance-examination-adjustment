import { Injectable } from '@angular/core';
import { FormatedSchool, School } from '../types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FormatService {

  constructor() { }

  public format(schools: School[]): FormatedSchool[] {
    return schools.map(school => {
      return Object.assign(
        school,
        {
          formated_second_interview_time: new Date(2021, school.second_interview_time.month, school.second_interview_time.day).getTime()
        }
      );
    });
  }
}
