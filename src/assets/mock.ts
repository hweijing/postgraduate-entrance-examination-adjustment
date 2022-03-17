import { ComprehensiveStrength, ProfessionalPower } from 'src/app/types/enums';
import { School } from 'src/app/types/interfaces';

export const schools: School[] = [
  {
    name: '新疆大学',
    comprehensive_strength: ComprehensiveStrength.二一一,
    professional_power: ProfessionalPower['C+'],
    second_interview_time: {
      month: 4,
      day: 4
    }
  },
  {
    name: '河南理工大学',
    comprehensive_strength: ComprehensiveStrength.普一,
    professional_power: ProfessionalPower['C+'],
    second_interview_time: {
      month: 3,
      day: 22
    }
  },
  {
    name: '兰州理工大学',
    comprehensive_strength: ComprehensiveStrength.普一,
    professional_power: ProfessionalPower['C-'],
    second_interview_time: {
      month: 3,
      day: 22
    }
  },
  {
    name: '西南石油大学',
    comprehensive_strength: ComprehensiveStrength.双一流,
    professional_power: ProfessionalPower.B,
    second_interview_time: {
      month: 3,
      day: 25
    }
  },
  {
    name: '云南大学',
    comprehensive_strength: ComprehensiveStrength.二一一,
    professional_power: ProfessionalPower['C-'],
    second_interview_time: {
      month: 3,
      day: 26
    }
  },
  {
    name: '西北师范大学',
    comprehensive_strength: ComprehensiveStrength.普一,
    professional_power: ProfessionalPower['B-'],
    second_interview_time: {
      month: 3,
      day: 25
    }
  }
];
