import { ComprehensiveStrength, ProfessionalPower } from './enums';

export interface DateTime {
  month: number;
  day: number;
}

export interface School {
  name: string;
  comprehensive_strength: ComprehensiveStrength;
  professional_power: ProfessionalPower;
  second_interview_time: DateTime;
}

export interface FormatedSchool extends School {
  formated_second_interview_time: number;
}
