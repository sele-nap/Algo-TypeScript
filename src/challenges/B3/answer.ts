/**
 * In this challenge, you must find and attach to each group the group (or groups)
 * with which the current group has the most skills in common. 
 * Attached groups must be sorted by their name (A to Z).
 * You must not change the order of the main list of groups.
 * 
 * @param groups List of groups without closestGroups
 * @returns The same list but with a new closestGroups prop on each
 */

// ↓ uncomment bellow lines and add your response!
export default function ({ groups }: { groups: GroupWithSills[] }): GroupWithSillsAndClosestGroups[] {
    return groups.map((group) => {
        let cpt = 0;
        let index = 0;
        let closests: GroupWithSills[] = [];
        let maxCpt = 0;
        groups.map((groupToCompare) => {
            if (group.name !== groupToCompare.name)
                group.skills.map((skill) => {
                    if (groupToCompare.skills.includes(skill)) { cpt++ }
                })
            if (cpt > maxCpt) {
                maxCpt = cpt;
                closests = [];
                closests.push(groups[index]);
            } else if (cpt === maxCpt) {
                closests.push(groups[index]);
            }
            cpt = 0;
            index++;
        });
        return {...group, closestGroups: closests.map((closest) => closest)}
    })
}

// used interfaces, do not touch
export interface GroupWithSills {
    name: string;
    skills: string[];
}

export interface GroupWithSillsAndClosestGroups extends GroupWithSills {
    closestGroups: GroupWithSills[];
}
