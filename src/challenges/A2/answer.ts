/**
 * In this challenge, you have to add a list of skills to each group (based on 
 * students skills in the group). Duplicates skills for one group is not permitted. Skills must be
 * sorted alphabatically. Groups order, students order and students skills order must remain
 * untouched.
 * 
 * @param groups List of groups without skills, but with students
 * @returns List of groups with a new prop skills
 */

// ↓ uncomment bellow lines and add your response!
export default function ({ groups }: { groups: Group[] }): GroupWithSills[] {
    const groupsWithSkills: GroupWithSills[] = []
    
    for (const group of groups) {
        const groupSkills: string[] = [];  // create empty array for group skills
        
        for (const student of group.students) {  // for each student of a group
            for (const skill of student.skills) {  // list all skills
                if (groupSkills.includes(skill) === false) {  // if group skills doesn't includes student skill, else go to next skill
                    groupSkills.push(skill);   // Push student skill in group skills
                }
            }
        }
        groupSkills.sort();   // sort all group skills retrieved by alphabetical order
        groupsWithSkills.push({ ...group, skills: groupSkills });  // add new entry with group.name, group.students, and group skills without redudancy
        
    }
    return groupsWithSkills;
}

// used interfaces, do not touch
interface Student {
    name: string;
    age: number;
    skills: string[];
}

export interface Group {
    students: Student[];
    name: string;
}

export interface GroupWithSills extends Group {
    skills: string[];
}