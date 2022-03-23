import { Component } from '@angular/core';
import { FormatService } from './services/format.service';
import { FormatedSchool, School } from './types/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private formatService: FormatService,
  ) { }

  public calculate(schools: School[]): void {
    const formatedSchools = this.formatService.format(schools);
    formatedSchools.sort((a, b) => {
      return a.formated_second_interview_time - b.formated_second_interview_time;
    });

    const maxlength = Math.ceil(formatedSchools.length / 3);
    const allotedSchools: FormatedSchool[][] = [];
    for (let index = 0; index < formatedSchools.length; index += maxlength) {
      allotedSchools.push(formatedSchools.slice(index, index + maxlength));
    }

    const finallySchools: FormatedSchool[] = [];
    allotedSchools.forEach(allotedSchool => {
      allotedSchool.sort((a, b) => {
        return (b.comprehensive_strength + b.professional_power) - (a.comprehensive_strength + a.professional_power);
      });
      finallySchools.push(allotedSchool[0]);
    });
  }
}
