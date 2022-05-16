/**
 * In this challenge, you have to get all the categories from the events. The categories 
 * must be unique and sorted from A to Z.
 * 
 * @param events List of events with their categories
 * @returns All existing categories sorted alphabatically without duplicates (A to Z)
 */

// ↓ uncomment bellow lines and add your response!
export default function ({
    events,
}: {
    events: EventWithCategory[];
}): string[] {
    let allCategories: string[] = [];
    events.map((event: EventWithCategory) =>
        event.categories.map((category: string) =>
            allCategories.includes(category)
                ? void 0
                : allCategories.push(category)
        )
    );
    return allCategories.sort();
}

// used interfaces, do not touch
export interface EventWithCategory {
    startDatetime: string;
    endDatetime: string;
    event: string;
    categories: string[];
}
